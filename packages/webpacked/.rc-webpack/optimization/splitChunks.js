module.exports = {
  cacheGroups: {
    commons: {
      test: /[\\/]node_modules[\\/]/,
      name: 'vendors',
      chunks: 'all'
    }
  }
};
