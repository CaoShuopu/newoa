module.exports = {
  // options...
  devServer: {
    port: 8080,
    proxy: {
      '/xktadminservice': {
        target: 'http://114.215.192.212:8040',
        changeOrigin: true
      }
    }
  },
  css: {
    loaderOptions: {
      less: {
        javascriptEnabled: true
      }
    }
  },
  productionSourceMap: false
}
