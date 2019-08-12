const HtmlWebpackPlugin = require('html-webpack-plugin');
const vars = require('./vars').default;
const { HTML_PLUGIN } = vars;

module.exports = [
  new HtmlWebpackPlugin({
    title: HTML_PLUGIN.title,
    template: HTML_PLUGIN.template,
    inject: 'head'
  })
];
