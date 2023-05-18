const { createProxyMiddleware } = require('http-proxy-middleware')

module.exports = function expressMiddleware(router) {
  router.use(
    '/toggle',
    createProxyMiddleware({
      target: 'https://toggle-api.usepredict.com',
      pathRewrite: { '^/toggle': '' },
      changeOrigin: true,
      secure: false,
    })
  )
}
