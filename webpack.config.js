module.exports = {
  entry: __dirname + '/script.js',
  output: {
    path: __dirname + '/dist',
    filename: 'bundle.js'
  },

  module: {
    loaders: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel',
        query:{
          presets: ['latest']
        }
      },
      {
        test: /\.js$/,
        loader: 'babel',
        query: {
          plugins: [
            'transform-es3-member-expression-literals',
            'transform-es3-property-literals',
            'transform-jscript',
          ]
        }
      }
    ]
  },
  resolve: {
    extensions: ['', '.js']
  }
};
