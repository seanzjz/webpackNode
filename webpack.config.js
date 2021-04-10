const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin') // webpack的插件
// 最新的 vue-loader 中，VueLoaderPlugin 插件的位置有所改变
const { VueLoaderPlugin } = require('vue-loader/dist/index')
const { CleanWebpackPlugin } = require('clean-webpack-plugin') // 打包清除上次的dist文件

module.exports = {
  mode: 'development', // 环境模式
  entry: path.resolve(__dirname, './src/main.js'), // webpack第一个元素，打包入口
  output: { // webpack第二个元素，打包出口
    path: path.resolve(__dirname, 'dist'),
    filename: 'js/[name].js', //打包的静态资源文件名
    clean: true
  },
  // module: {
  //   rules: [ // vue-loader匹配规则
  //     {
  //       test: /\.vue$/,
  //       exclude: /node_modules/, // 不编译node_modules下的文件
  //       use: [
  //         'vue-loader'
  //       ]
  //     }
  //   ]
  // },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/, // 不编译node_modules下的文件
        use: 'babel-loader'
      },     
      {
        test: /\.(eot|svg|ttf|woff|woff2)(\?\S*)?$/,
        loader: 'file-loader'
      },
      {
        test: /\.vue$/,
        exclude: /node_modules/, // 不编译node_modules下的文件
        use: [
          'vue-loader'
        ]
      },
      {
        test:/\.css$/,
        use: ['style-loader', 'css-loader']
      },
      {
        test:/\.less$/,
        use: ['style-loader', 'css-loader' ,'less-loader']
      },
      {
        test:/\.scss$/,
        use: ['style-loader', 'css-loader' ,'scss-loader']
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, './index.html'), // 我们要使用的 html 模板地址
      filename: 'index.html',  // 打包后输出的文件名
      title: 'webpack 开发环境搭建' // index.html 模板内，通过 <%= htmlWebpackPlugin.options.title %> 拿到的变量
    }),
    // 添加 VueLoaderPlugin 插件, 不然webpack解析不了vue文件
    new VueLoaderPlugin(),
    new CleanWebpackPlugin()
  ],
  devServer: {
    contentBase: path.resolve(__dirname, './dist'),
    port: 8080,
    publicPath: '/'
  }
}