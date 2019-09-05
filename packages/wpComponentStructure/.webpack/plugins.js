module.exports = [
  new (require('html-webpack-plugin'))({
    template: require('path').resolve('./public/index.html')
  })
];
