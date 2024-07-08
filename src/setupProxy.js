const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = function(app) {
  app.use(
    '/api',
    createProxyMiddleware({
      target: 'http://54.157.229.132:5000',
      changeOrigin: true,
      secure: false, 
    })
  );
};