const htmlWebPackPlugin = require('html-webpack-plugin')
const webpack = require('webpack')
module.exports = {
  entry: __dirname + '/app/main.js', // 多次提及的唯一入口文件
  output: {
    path: __dirname + '/public',
    filename: 'bundle.js'
  },
  devtool: 'eval-source-map',
  devServer: {
    contentBase: './public', // 本地服务器所加载的页面所在的目录
    historyApiFallback: true, // 不跳转
    inline: true, // 实时刷新
    hot: true
  },
  module: {
    rules: [
      {
        test: /(\.jsx|\.js)$/,
        use: {
          loader: 'babel-loader'
        },
        exclude: /node_modules/
      },
      {
        test: /\.css$/,
        use: [
          { loader: 'style-loader' },
          {
            loader: 'css-loader',
            options: {
              modules: true
            }
          },
          { loader: 'postcss-loader' }
        ]
      }
    ]
  },
  plugins: [
    new webpack.BannerPlugin('QILL is handsome'),
    new htmlWebPackPlugin({
      template: __dirname + '/app/index.tmpl.html'
    }),
    new webpack.HotModuleReplacementPlugin()
  ]
}
