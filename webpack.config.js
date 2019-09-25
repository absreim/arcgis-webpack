const ArcGISPlugin = require('@arcgis/webpack-plugin');

module.exports = {
  entry: [
    'src/index.jsx',
  ],
  output: {
    path: __dirname,
    filename: 'public/bundle.js',
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
  node: false,
};
