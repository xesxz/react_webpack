const path = require('path')
const HtmlPlugin = require('html-webpack-plugin')
module.exports = {
  mode: "development",
  entry: {
    app: path.join(__dirname, 'src/index.js')
  },
  output: {
    filename: 'bundle.js',
    path: path.join(__dirname, 'dist')
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        use: ['babel-loader'],
        exclude: path.join(__dirname, 'node_modules')
      }
    ]
  },
  devServer: {
    hot: true,
    host: "0.0.0.0",
    overlay: true
  },
  plugins: [
    new HtmlPlugin({
      filename: 'index.html',
      template: path.join(__dirname, 'src/index.html')
    })
  ]
}