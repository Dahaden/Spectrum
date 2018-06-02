var webpack = require('webpack');
var path = require('path');
const { CheckerPlugin } = require('awesome-typescript-loader');

var BUILD_DIR = path.resolve(__dirname, './public/js');
var APP_DIR = path.resolve(__dirname, './src/client');

const config = {
  entry: {
    main: APP_DIR + '/index.tsx'
  },
  devtool: "source-map",
  output: {
    filename: 'bundle.js',
    path: BUILD_DIR,
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        exclude: /node_modules/,
        use: [{
          loader: "awesome-typescript-loader",
          options: {
            cacheDirectory: true,
            presets: ['react', 'es2015'] // Transpiles JSX and ES6
          }
        },
        ]
      },
      {
        enforce: "pre",
        test: /\.js$/,
        loader: "source-map-loader"
      }
    ],

  },
  plugins: [
    new CheckerPlugin()
  ],
  resolve: {
    extensions: ['.ts', '.tsx', '.js', '.jsx']
  },

};

module.exports = config;