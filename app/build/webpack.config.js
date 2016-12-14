var  path = require('path')
var webpack = require('webpack')

module.exports = {
  target: 'node',
  devtool: false,
  entry: ['babel-polyfill', './app/index.js'],
  output: {
    filename: 'server.js',
    path: path.resolve(__dirname, '../dist'),
    libraryTarget: 'commonjs'
  },
  externals: Object.keys(require('../../package.json').dependencies),
  plugins: [
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': '"production"',
      'process.env.VUE_ENV': '"server"',
      'process.env.API_BASE': '"http://114.215.179.175:9096/osyn/rest"'
    })
  ],
  module: {
    rules: [
      {
        test: /\.js$/,
        loader: 'babel-loader',
        exclude: /node_modules/
      }
    ]
  }
}
