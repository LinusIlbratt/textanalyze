const path = require('path');

module.exports = {
  mode: 'development',
  resolve: {
    modules: [path.resolve(__dirname), 'node_modules'],
    extensions: ['.js', '.json'],
  },
};
