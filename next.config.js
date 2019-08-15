const withImages = require('next-images')

module.exports = withImages({
  target: 'serverless',
  experimental: {publicDirectory: true},
})
