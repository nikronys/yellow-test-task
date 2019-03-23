const path = require('path');
const HtmlWebPackPlugin = require("html-webpack-plugin");

module.exports = {
  entry: {
    app: './app/index.js'
  },
  output: {
      filename: 'bundle.js',
      path: path.join(__dirname, 'build'),
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader"
        }
      },
      {
        test: /\.html$/,
        use: [
          {
            loader: "html-loader"
          }
        ]
      }
    ]
  },
  plugins: [
    new HtmlWebPackPlugin({
      template: "./index.html",
      filename: "index.html"
    })
  ],
  resolve: {
    extensions: ['.js'],
    alias: {
      components: path.resolve(__dirname, 'app/components'),
      common: path.resolve(__dirname, 'app/components/common')
    }
  }
};