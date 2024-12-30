/* eslint-disable @typescript-eslint/no-require-imports */
const path = require('path');
const webpack = require('webpack');
const packageJson = require('./package.json'); // Import the package.json

module.exports = {
  entry: './src/index.tsx', // Your TypeScript entry file
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'widget.js',
    library: 'Widget',
    libraryTarget: 'umd',
    publicPath:
      process.env.NODE_ENV === 'production'
        ? 'https://widgettaxefy.at/dist/'
        : '/dist/',
    chunkFilename: '[name].[contenthash].js', // Ensures chunk files have unique names
  },
  resolve: {
    extensions: ['.ts', '.tsx', '.js', '.css', '.json'],
    alias: {
      react: 'preact/compat',
      'react-dom': 'preact/compat',
    },
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: 'ts-loader',
        exclude: /node_modules/,
      },
      {
        test: /\.css$/, // For handling CSS files
        use: ['style-loader', 'css-loader'],
      },
    ],
  },
  mode: process.env.NODE_ENV || 'development', // Set to development mode for local development
  devServer: {
    static: {
      directory: path.join(__dirname), // Serve your project root directory (includes test.html)
    },
    compress: true, // Enable gzip compression
    port: 9000, // Specify the port
    open: true, // Automatically open the browser when the server starts
    historyApiFallback: {
      index: 'test.html', // Serve test.html by default
    },
    hot: true, // Enable hot reloading
  },
  plugins: [
    new webpack.DefinePlugin({
      'process.env.VERSION': JSON.stringify(packageJson.version), // Inject version
    }),
  ],
};
