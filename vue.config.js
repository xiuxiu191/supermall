/*
  配置路径别名
*/
module.exports = {
  devServer:{
	  post: 8080,
	  host: '127.0.0.1'
  }
  configureWebpack:{
    resolve: {
          alias: {
            'assets': '@/assets',
            'common': '@/common',
            'components': '@/components',
            'network': '@/network',
            'views': '@/views',
          }
        }
  }
}
