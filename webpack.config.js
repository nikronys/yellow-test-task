const path = require('path');
const HtmlWebPackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: {
    app: './app/index.js'
  },
  output: {
    filename: 'bundle.js',
    path: path.join(__dirname, 'build')
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader'
        }
      },
      {
        test: /\.html$/,
        use: [
          {
            loader: 'html-loader'
          }
        ]
      },
      {
        test: /\.css$/,
        use: [
          'style-loader',
          'css-loader'
        ]
      },
      {
        test: /\.png$/,
        loader: 'url-loader',
        options: {
          mimetype: 'image/png'
        }
      },
      {
        test: /\.jpg$/,
        loader: 'url-loader',
        options: {
          mimetype: 'image/jpg'
        }
      },
      {
        test: /\.ico$/,
        loader: 'url-loader',
        options: {
          mimetype: 'image/x-icon'
        }
      },
      { 
        test: /\.svg$/, 
        loader: 'svg-inline-loader' 
      }
    ]
  },
  plugins: [
    new HtmlWebPackPlugin({
      template: './index.html',
      filename: 'index.html'
    })
  ],
  resolve: {
    extensions: ['.js'],
    alias: {
      components: path.resolve(__dirname, 'app/components'),
      common: path.resolve(__dirname, 'app/components/common'),
      assets: path.resolve(__dirname, 'app/assets'),
      resources: path.resolve(__dirname, 'app/resources')
    }
  },
  devServer: {
    port: 9000,
    historyApiFallback: true
  },
  optimization: {
    runtimeChunk: 'single',
    splitChunks: {
      chunks: 'all',
      maxInitialRequests: Infinity,
      minSize: 0,
      cacheGroups: {
        vendor: {
          test: /[\\/]node_modules[\\/]/,
          name(module) {
            const packageName = module.context.match(/[\\/]node_modules[\\/](.*?)([\\/]|$)/)[1];
            return `npm.${packageName.replace('@', '')}`;
          },
        },
      },
    },
  },
};