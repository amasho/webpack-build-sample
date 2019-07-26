module.exports = {
  mode: 'development',
  devtool: 'source-map',
  entry: ['@babel/polyfill', './src/index.js', './src/util.js'],
  output: {
    path: `${__dirname}/dist`,
    filename: 'main.js',
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
        },
      },
    ],
  },
}
