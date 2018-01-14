const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: __dirname + '/src/index.js',
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
          presets: ['env']
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
  plugins: [
    new HtmlWebpackPlugin({
      inject: true,
      template: __dirname + '/public/index.html'
    }),
  ],
  resolve: {
    alias: {
      // Switching to Nerv from React without any code changes
      // https://github.com/NervJS/nerv#switching-to-nerv-from-react
      'react': 'nervjs',
      'react-dom': 'nervjs',
    },
    extensions: ['', '.js']
  }
};
