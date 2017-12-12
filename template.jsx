export default ({ markup, helmet }) => {
	return `<!doctype html>
  <html ${helmet.htmlAttributes.toString()}>
  <head>
    ${helmet.title.toString()}
    ${helmet.meta.toString()}
    ${helmet.link.toString()}
    <link href="https://fonts.googleapis.com/css?family=Roboto:400,400i,700,700i" rel="stylesheet">
    <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css" >
  </head>
  <body ${helmet.bodyAttributes.toString()}">
    <div id="root">${markup}</div>
    <script src="/static/client.js" async></script>
  </body>
  </html>`;
};
