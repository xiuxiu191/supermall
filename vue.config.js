module.exports = {
  configureWebpack: {
    /*
    启动默认打开浏览器  open: true
    */
    devServer: {
      open: true
    },
    /*
      配置路径别名
    */
    resolve: {
      alias: {
        assets: '@/assets',
        common: '@/common',
        components: '@/components',
        network: '@/network',
        views: '@/views'
      }
    }
  }
}
