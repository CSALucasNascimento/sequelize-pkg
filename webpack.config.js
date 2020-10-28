const path = require('path');

module.exports = {
  entry: './src/models/index.js',
  output: {
    filename: 'index.js',
    path: path.resolve(__dirname, 'dist'),
  },
  externals: {
    sequelize: 'require("sequelize")'
  },
  resolve: {
    fallback: {
      fs: false,
      path: require.resolve("path-browserify")
    }
  }
};