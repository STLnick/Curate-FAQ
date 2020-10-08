module.exports = {
  target: 'node',
  entry: './server.js',
  mode: 'development',
  resolve: {
    modules: ['server', 'node_modules'],
  },
};