const withBundleAnalyzer = require('@next/bundle-analyzer')({
  enabled: process.env.ANALYZE === 'true', // eslint-disable-line no-process-env
})
const withImages = require('next-images')

module.exports = withBundleAnalyzer(
  withImages({
    target: 'serverless',
    experimental: {publicDirectory: true},
  })
)
