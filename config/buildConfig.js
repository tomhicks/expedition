var ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = function () {
  return {
      entry: {
          expedition: './src/client/main.jsx'
      },
      output: {
          publicPath: '/build',
          path: 'build',
          filename: '[name].js'
      },
      module: {
          loaders: [
              { test: /\.json$/, loader: 'json' },
              { test: /\.jsx$/, loader: 'jsx' },
              { test: /\.css$/, loader: 'style!css' },
              {
                  test: /\.scss$/,
                  loader: ExtractTextPlugin.extract('style-loader', 'css-loader!sass-loader')
              }
          ]
      },
      resolve: {
          extensions: ['', '.webpack.js', '.web.js', '.js', '.jsx']
      },
      plugins: [
          new ExtractTextPlugin('[name].css')
      ]
  };
};
