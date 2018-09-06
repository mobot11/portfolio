const express = require('express');
const fs = require('fs');
const path = require('path');
const bodyParser = require('body-parser');
const next = require('next');

const dev = process.env.NODE_ENV !== 'production';
const app = next({ dev });
const handle = app.getRequestHandler();

app.prepare().then(() => {
  const server = express();
  // Parse application/x-www-form-urlencoded
  server.use(bodyParser.urlencoded({ extended: false }));
  // Parse application/json
  server.use(bodyParser.json());

  server.use(function(req, res, next) {
    res.header('Access-Control-Allow-Origin', '*');
    res.header(
      'Access-Control-Allow-Headers',
      'Origin, X-Requested-With, Content-Type, Accept'
    );
    next();
  });

  server.get('/api/blog/posts/all', (req, res) => {
    const blogPath = path.join(__dirname, '/blog_posts/6_26_15.md');
    console.log(blogPath);
    fs.readFile(blogPath, (err, data) => {
      if (err) throw err;

      const blogPost = JSON.stringify(data.toString('utf8'));

      res.send(blogPost);
    });
  });

  server.get('/blog', (req, res) => {
    return app.render(req, res, '/blog');
  });

  server.get('*', (req, res) => {
    return handle(req, res);
  });

  const port = process.env.PORT || 8080;

  server.listen(port, err => {
    if (err) throw err;

    console.log(`> Ready on port ${port}...`);
  });
});
