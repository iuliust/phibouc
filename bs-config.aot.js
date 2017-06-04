const proxyMiddleware = require('http-proxy-middleware');
const fallbackMiddleware = require('connect-history-api-fallback');

module.exports = {
  port: 4200,
  server: {
    baseDir: "src",
    routes: {
      "/node_modules": "node_modules"
    },
    middleware: {
      // overrides the fallback middleware to use index-aot
      1: proxyMiddleware('/graphql', {
        target: 'https://localhost:3000/graphql',
        secure: false,
        changeOrigin: true,
      }),
      2: fallbackMiddleware({ index: '/index-aot.html' }),
    }
  }
};
