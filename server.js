const path = require('path');
const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;
const proxy = require('express-http-proxy');

// using webpack-dev-server and middleware in development environment
if (process.env.NODE_ENV !== 'production') {
  const webpackDevMiddleware = require('webpack-dev-middleware');
  const webpackHotMiddleware = require('webpack-hot-middleware');
  const webpack = require('webpack');
  const config = require('./webpack.config');
  const compiler = webpack(config);
  
  app.use(webpackDevMiddleware(compiler, { noInfo: true, publicPath: config.output.publicPath }));
  app.use(webpackHotMiddleware(compiler));
}

app.use(express.static(path.join(__dirname, 'dist')));

app.get('/', function(request, response) {
  response.sendFile(__dirname + '/dist/index.html')
});

app.use("/api/*", proxy('0.0.0.0:5000', {
    forwardPath: function (req, res) {
        return require('url').parse(req.baseUrl).path;
    }
}));

app.listen(PORT, '0.0.0.0', function(error) {
  if (error) {
    console.error(error);
  } else {
    console.info("==> 🌎  Listening on port %s. Visit http://localhost:%s/ in your browser.", PORT, PORT);
  }
});
