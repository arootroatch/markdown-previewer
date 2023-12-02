const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');

module.exports = {
  entry: './index.js',
  mode: 'development',
  output: {
    path: path.resolve(__dirname, './dist'),
    filename: 'index_bundle.js',
  },
  target: 'web',
  devServer: {
    port: '5000',
    static: {
      directory: path.join(__dirname, 'public')
},
    open: true,
    hot: true,
    liveReload: true,
  },
  resolve: {
    extensions: ['.js', '.jsx', '.json'],
    fallback: { 
        "os": false,
        "path": false,
        "tty": false,
        "console": false,
        "http": false,
        "https": false,
        "vm": false,
        "fs": false,
        "url": false,
        "util": false
        }
  },
  module: {
    rules: [
      {
        test: /\.css$/i,
        exclude: /node_modules/, 
        use: ["style-loader", "css-loader"]
      },
      {
        test: /\.(js|jsx)$/, 
        exclude: /node_modules/, 
        use: 'babel-loader', 
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: path.join(__dirname, 'public', 'index.html')
    })
  ]
};