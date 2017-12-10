export default ({ markup, helmet }) => {
	return `<!doctype html>
  <html ${helmet.htmlAttributes.toString()} style="height: 100%">
  <head>
    ${helmet.title.toString()}
    ${helmet.meta.toString()}
    ${helmet.link.toString()}
    <link href="https://fonts.googleapis.com/css?family=Roboto:400,400i,700,700i" rel="stylesheet">
  </head>
  <body ${helmet.bodyAttributes.toString()} style="border: 8px solid #090a0f; height: 100%; padding: 20px;">
    <div id="root">${markup}</div>
    <script src="/static/client.js" async></script>
  </body>
  </html>`;
};
