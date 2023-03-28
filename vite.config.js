const path = require('path');

module.exports = {
  root: 'resources/js',
  base: '/',
  outDir: '../public/js',
  assetsDir: '../public',
  alias: {
    '@': path.resolve(__dirname, 'resources/js'),
  },
};
