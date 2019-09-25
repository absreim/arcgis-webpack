const ArcGISPlugin = require('@arcgis/webpack-plugin');
const path = require('path');

module.exports = {
  entry: [
    'src/index.jsx',
  ],
  output: {
    path: path.resolve(__dirname, 'public'),
    filename: '[name].bundle.js',
  },
  resolve: {
    extensions: ['.js', '.jsx'],
  },
  devtool: 'source-map',
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
      },
    ],
  },
  plugins: [
    new ArcGISPlugin(),
  ],
  node: {
    process: false,
    global: false,
    fs: 'empty',
  },
};
