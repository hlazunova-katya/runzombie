const HtmlWebpackPlugin = require ('html-webpack-plugin');
const ExtractTextPlugin = require ('extract-text-webpack-plugin');
const path = require ('path');

module.exports = {
  entry: './src/index.js',
  output: {
    path: path.resolve (__dirname, 'dist'),
    filename: 'js/index.bundle.js'
  },
  module: {
    rules: [
      {
        test: /\.scss$/,
        use: ExtractTextPlugin.extract ({
          fallback: 'style-loader',
          use: [
              {
                  loader: 'css-loader', 
                  options: {
                      url: false,
                      sourceMap: true
                  }
              },
              {
                  loader: 'sass-loader',
                  options: {
                    url: false,
                    sourceMap: true
                }
              }
            ]
        })
      }
    ]
  },
  devServer: {
      contentBase: path.join (__dirname, 'dist'),
      compress: true,
      stats: 'errors-only',
      open: true
  },
  plugins: [
    // new HtmlWebpackPlugin ({
    //   title: 'Final Game',
    //   filename: 'game.html',
    //   minify: {
    //     collapseWhitespace: true
    //   }
    // }),
    new ExtractTextPlugin ({
      filename: 'css/game.css',
      disable: false,
      allChunks: true
    })
  ]
};
