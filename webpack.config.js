const ExtractTextPlugin = require('extract-text-webpack-plugin')
const BrowserSyncPlugin = require('browser-sync-webpack-plugin')
const path = require('path')

module.exports = {
  entry: './index.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'styles.css',
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: ExtractTextPlugin.extract({
          fallback: 'style-loader',
          use: [
            { loader: 'css-loader', options: { importLoaders: 1 } },
            'postcss-loader'
          ]
        })
      }
    ]
  },
  plugins: [
    new ExtractTextPlugin('styles.css'),
    new BrowserSyncPlugin({
      host: 'localhost',
      port: 3000,
      server: {baseDir: ['./']},
      files: ['./*.html']
    })
  ]
}
