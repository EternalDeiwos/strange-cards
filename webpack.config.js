const path = require('path')
const webpack = require('webpack')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const cwd = process.cwd()

/**
 * Config
 */
module.exports = {
  context: path.join(cwd, 'app'),

  entry: {
    app: ['./js/index.jsx'],
    react: ['react', 'react-dom', 'react-router-dom', 'redux', 'react-redux', 'react-router-redux'],
    utils: ['moment', 'material-ui', 'dom-to-image', 'file-saver']
  },

  output: {
    path: path.resolve('dist'),
    filename: 'bundle_[name].js'
  },

  module: {
    loaders: [
      {
        test: /\.jsx?$/,
        loaders: ['react-hot-loader', 'babel-loader'],
        exclude: /node_modules/
      },
      {
        test: /\.css$/,
        loaders: [
          'style-loader',
          'css-loader'
        ]
      },
      {
        test: /\.less$/,
        loaders: [
          'style-loader',
          'css-loader',
          'less-loader'
        ]
      },
      {
        test: /\.scss$/,
        loaders: [
          'style-loader',
          'css-loader',
          'scss-loader'
        ]
      },
      {
        test: /\.(png|jpg|jpeg|svg)$/,
        loaders: [
          'file-loader'
        ]
      }
    ]
  },

  plugins: [
    new HtmlWebpackPlugin({
      template: './index.ejs',
    }),
    new webpack.IgnorePlugin(/^(fs|ipc)$/)
  ]
}

