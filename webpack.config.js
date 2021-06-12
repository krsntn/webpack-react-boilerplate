/* eslint-disable no-console */
const path = require('path');
const ESLintPlugin = require('eslint-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
// const BundleAnalyzerPlugin =
//   require('webpack-bundle-analyzer').BundleAnalyzerPlugin;

const mode = process.env.NODE_ENV || 'development';
let target = 'browserslist';
let isProd = true;

if (mode === 'development') {
  isProd = false;
  // Temporary workaround for HMR to work properly
  target = 'web';
}

console.log('NODE_ENV', mode);

module.exports = {
  entry: path.join(__dirname, 'src', 'index.js'),
  output: {
    path: path.join(__dirname, 'dist'),
    // publicPath: path.join(__dirname, 'src', 'assets'),
    filename: '[name].[contenthash].js',
    clean: true,
    // this places all images processed in an image folder
    assetModuleFilename: 'assets/[hash][ext][query]',
  },
  mode: mode,
  resolve: {
    // modules: [path.resolve(__dirname, 'src'), 'node_modules'],
    alias: {
      Assets: path.resolve(__dirname, 'src/assets'),
      Pages: path.resolve(__dirname, 'src/pages'),
      Layouts: path.resolve(__dirname, 'src/layouts'),
      Components: path.resolve(__dirname, 'src/components'),
      Styles: path.resolve(__dirname, 'src/styles'),
    },
    extensions: ['.js', '.jsx'],
  },
  target: target,
  devServer: {
    historyApiFallback: true,
    // contentBase: path.join(__dirname, 'assets'),
    hot: true,
  },
  devtool: 'cheap-module-source-map',
  optimization: {
    splitChunks: {
      cacheGroups: {
        commons: {
          test: /[\\/]node_modules[\\/]/,
          name: 'vendor',
          chunks: 'all',
          enforce: true,
        },
      },
    },
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/i,
        exclude: /node_modules/,
        use: ['babel-loader'],
      },
      {
        test: /\.(s[ac]|c)ss$/i,
        exclude: /\.module\.(s[ac]|c)ss$/i,
        use: [
          MiniCssExtractPlugin.loader,
          'css-loader',
          'postcss-loader',
          'sass-loader',
        ],
      },
      {
        test: /\.module\.(s[ac]|c)ss$/i,
        use: [
          MiniCssExtractPlugin.loader,
          {
            loader: 'css-loader',
            options: {
              modules: {
                localIdentName: isProd
                  ? '[hash:base64:5]'
                  : '[path][name]__[local]--[hash:base64:5]',
              },
            },
          },
          'postcss-loader',
          'sass-loader',
        ],
      },
      {
        test: /\.(jpe?g|png|gif|svg)$/i,
        type: 'asset',
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: 'Hello World',
      template: path.join(__dirname, 'src', 'index.html'),
      favicon: path.join(__dirname, 'src', 'assets', 'favicon.png'),
    }),
    new MiniCssExtractPlugin({
      filename: isProd ? '[name].[hash].css' : '[name].css',
      chunkFilename: isProd ? '[id].[hash].css' : '[id].css',
    }),
    new ESLintPlugin(),
    // new BundleAnalyzerPlugin(),
  ],
};
