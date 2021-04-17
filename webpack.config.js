const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const ESLintWebpackPlugin = require('eslint-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

/**
  @returns {import('webpack').Configuration}
*/
module.exports = (_env, { mode }) => ({
  mode,
  devtool: 'source-map',
  entry: path.resolve(__dirname, 'src'),
  output: {
    path: path.resolve(__dirname, 'build'),
    publicPath: '',
    filename: 'static/js/[name].[chunkhash:8].js',
    chunkFilename: 'static/js/[name].[chunkhash:8].chunk.js',
    assetModuleFilename: 'static/media/[name].[hash:8][ext]'
  },
  resolve: {
    extensions: ['.jsx', '.js', '.json']
  },
  module: {
    parser: {
      javascript: {
        strictExportPresence: true
      }
    },
    rules: [
      {
        oneOf: [
          {
            test: /\.jsx?$/,
            include: path.resolve(__dirname, 'src'),
            loader: 'babel-loader',
            options: {
              cacheDirectory: true
            }
          },
          {
            test: /\.css$/,
            use: [
              mode === 'development'
                ? { loader: 'style-loader' }
                : { loader: MiniCssExtractPlugin.loader },
              { loader: 'css-loader' }
            ]
          },
          {
            exclude: [
              /\.jsx?$/, // scripts from node_modules which aren't transpiled with babel-loader
              /\.html$/, // handled by HtmlWebpackPlugin
              /\.json$/, // handled internally by Webpack
              /^$/ // <https://github.com/jantimon/html-webpack-plugin/issues/1589#issuecomment-768418074>
            ],
            type: 'asset/resource'
          }
        ]
      }
    ]
  },
  performance: {
    hints: false
  },
  optimization: {
    moduleIds: 'named',
    chunkIds: 'named'
  },
  plugins: [
    new webpack.ProgressPlugin(),
    new CleanWebpackPlugin(),
    new ESLintWebpackPlugin({
      files: path.resolve(__dirname, 'src'),
      extensions: ['js', 'jsx']
    }),
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, 'public', 'index.html')
    }),
    new MiniCssExtractPlugin({
      filename: 'static/css/[name].[contenthash:8].css',
      chunkFilename: 'static/css/[name].[contenthash:8].chunk.css'
    })
  ]
});
