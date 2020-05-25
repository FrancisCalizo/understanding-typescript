const path = require('path');

module.exports = {
  // mode: 'development', // Used in development, it will not optimize the code nearly as much, making debugging easier
  entry: './src/app.ts', // the root entry file of the project
  output: {
    filename: 'bundle.js', // name of the JS file that will be produced in the end
    path: path.resolve(__dirname, 'dist'), // Requires an absolute path, so we use the 'path' module from node.js
    // publicPath: 'dist' // Additional configuration for the webpack dev server
  },
  devtool: 'inline-source-map', // tells webpack to still use source-maps after bundling
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
};
