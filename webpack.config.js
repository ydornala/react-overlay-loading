var webpack = require('webpack');
var path = require('path');
var UglifyJsPlugin = webpack.optimise.UglifyJsPlugin;
var env = process.env.WEBPACK_ENV;

var libraryName = 'OverlayLoader';
var plugins = [], outputFile;

if(env == 'build'){
  plugins.push(new UglifyJsPlugin( minimize: true ));
  outputFile = libraryName + '.min.js';
}else{
  outputFile = libraryName + '.js';
}

var config = {
  entry: __dirname + '/src/index.js',
  output: {
    path: path + '/lib',
    fileName: outputFile,
    library: libraryName,
    libraryTarget: 'umd',
    umdNamedDefine: true
  },
  module: {
    loaders: [
      {
        test: /\.js$/,
        loader: 'babel',
        exclude: /(node_modules)/
      }
    ]
  },
  resolve: {
    root: path.resolve('./src'),
    extensions: ['', '.js']
  },
  plugins: plugins
}

module.export = config
