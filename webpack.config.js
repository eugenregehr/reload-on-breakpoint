const path = require('path');

module.exports = {
  mode: 'development',
  watch: true,
  watchOptions: {
    ignored: /node_modules/,
  },
  entry: {
    'main': ['./index.js']
  },
  output: {
    filename: '[name].js',
    sourceMapFilename: "[name].js.map",
    path: path.resolve(__dirname, './dist'),
    publicPath: './dist'
  },
  devtool: 'source-map',
  module: {
    rules: [
      {
        test: /\.m?js$/,
        exclude: /(node_modules|bower_components)/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env']
          }
        }
      }
    ]
  }
};