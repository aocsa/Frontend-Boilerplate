const webpack = require('webpack');
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const packageJSON = require('./package.json');

const VENDOR = Object.keys(packageJSON.dependencies).filter(
  dependency =>
    dependency !== 'express' &&
    dependency !== 'babel-runtime' &&
    dependency !== 'babel-plugin-emotion',
);

module.exports = {
  entry: {
    bundle: ['./src/app.js'],
    vendor: VENDOR,
  },
  output: {
    path: path.join(__dirname, 'dist'),
    filename: '[name].[chunkhash].js',
  },
  resolve: {
    alias: {
      App: path.resolve(__dirname, './src/app'),
      Home: path.resolve(__dirname, './src/components/home'),
      Navbar: path.resolve(__dirname, './src/components/navbar'),
      Footer: path.resolve(__dirname, './src/components/footer'),
      Loading: path.resolve(__dirname, './src/components/loading'),
      Store: path.resolve(__dirname, './src/store'),
      Router: path.resolve(__dirname, './src/router'),
      Reducers: path.resolve(__dirname, './src/reducers/index'),
      Actions: path.resolve(__dirname, './src/actions/index'),
      Types: path.resolve(__dirname, './src/actions/types'),
      Styles: path.resolve(__dirname, './src/styles/styles.css'),
    },
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        use: 'babel-loader',
        exclude: /node_modules/,
      },
      {
        test: /\.css$/,
        loader: ExtractTextPlugin.extract({
          fallback: 'style-loader',
          use: 'css-loader',
        }),
      },
      {
        test: /\.(png|jpg|gif|svg|eot|tff|woff|woff2)$/,
        use: [
          {
            loader: 'url-loader',
            options: {
              limit: 30000,
            },
          },
          'image-webpack-loader',
        ],
      },
    ],
  },
  plugins: [
    new webpack.optimize.CommonsChunkPlugin({
      names: ['vendor', 'manifest'],
    }),
    new HtmlWebpackPlugin({
      template: 'src/index.html',
    }),
    new ExtractTextPlugin('styles.css'),
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV),
    }),
  ],
};
