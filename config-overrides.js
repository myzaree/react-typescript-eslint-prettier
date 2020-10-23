const path = require('path');
const { override, fixBabelImports, addLessLoader, addWebpackAlias } = require('customize-cra');

module.exports = override(
  fixBabelImports('import', {
    libraryDirectory: 'es',
    style: true,
  }),
  addLessLoader({
    lessOptions: {
      paths: ['./src/styles', './node_modules'],
      javascriptEnabled: true
    }
  }),
  addWebpackAlias({
    '@assets': path.join(__dirname, 'src/assets'),
    '@components': path.join(__dirname, 'src/shared/components'),
    '@layout': path.join(__dirname, 'src/layout'),
    '@utils': path.join(__dirname, 'src/utils')
  })
);