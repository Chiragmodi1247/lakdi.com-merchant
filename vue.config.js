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
        target: 'http://10.177.68.26:8111/',
        ws: true,
        changeOrigin: true,
        pathRewrite: {'^/backend' : ''}
      }
    }
  },
  lintOnSave: true
}