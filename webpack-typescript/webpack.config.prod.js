const path = require('path');
const CleanPlugin = require('clean-webpack-plugin');

module.exports = {
  mode: 'production',
  entry: './src/app.ts', // the root entry file of the project
  output: {
    filename: 'bundle.js', // name of the JS file that will be produced in the end
    path: path.resolve(__dirname, 'dist'), // Requires an absolute path, so we use the 'path' module from node.js
  },
  devtool: 'none',
  module: {
    // how to work with the files
    rules: [
      // uses loaders how to deal with certain files
      {
        test: /\.ts$/,
        use: 'ts-loader',
        exclude: /node_modules/,
      },
    ],
  },
  resolve: {
    extensions: ['.ts', '.js'],
  },
  plugins: [
    new CleanPlugin.CleanWebpackPlugin(), // This will clear the dist folder everytime before webpack bundles
  ],
};
