const autoprefixer = require('autoprefixer');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');
const webpack = require('webpack');

module.exports = {
  context: path.resolve(__dirname, 'src'),
  devtool: 'eval',
  entry: [
    './index.jsx'
  ],
  output: {
      filename: 'js/[name].js'
  },
  resolve: {
    extension: ['.js', '.jsx']
  },
  module: {
    loaders: [
      {
        test: /\.(js|jsx)$/,
        loader: ['babel-loader']
      },
      {
        test: /\.sass$/,
        use: [
          {loader: 'style-loader'},
          {loader: 'css-loader'},
          {
            loader: 'postcss-loader',
            options: {
              plugins: () =>  [autoprefixer({browsers: ['> 1%', 'IE > 10'] })]
            }
          },
          {loader: 'sass-loader'}
        ]
      }
    ]
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NamedModulesPlugin(),
    new HtmlWebpackPlugin({
      template: './public/index.html'
    })
  ],
  devServer: {
    host: '0.0.0.0',
    hot: true,
    port: '8080'
  }
};