module.exports = {
  "transpileDependencies": [
    "vuetify"
  ],
  devServer: {
    overlay: {
      warnings: true,
      errors: true
    },
    proxy: {
      '^/backend': {
        target: 'http://172.16.29.144:8111/',
        ws: true,
        changeOrigin: true,
        pathRewrite: {'^/backend' : ''}
      }
    }
  },
  lintOnSave: true
}