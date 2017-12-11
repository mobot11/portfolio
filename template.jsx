export default ({ markup, helmet }) => {
	return `<!doctype html>
  <html ${helmet.htmlAttributes.toString()}>
  <head>
    ${helmet.title.toString()}
    ${helmet.meta.toString()}
    ${helmet.link.toString()}
    <link href="https://fonts.googleapis.com/css?family=Roboto:400,400i,700,700i" rel="stylesheet">
  </head>
  <body ${helmet.bodyAttributes.toString()}">
    <div id="root">${markup}</div>
    <script src="/static/client.js" async></script>
  </body>
  </html>`;
};
