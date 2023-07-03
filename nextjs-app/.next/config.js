module.exports = {
  reactStrictMode: true,
  env: {
    customKey: 'my-value',
  },
  webpack: (config, { buildId, dev, isServer, defaultLoaders, webpack }) => {
    // Note: we provide webpack here to avoid needing to import it
    config.plugins.push(new webpack.IgnorePlugin(/\/__tests__\//))
    return config
  },
  webpackDevMiddleware: config => {
    // Perform customizations to webpack dev middleware config
    // Important: return the modified config
    return config
  },
  poweredByHeader: false,
  generateEtags: false,
  distDir: 'build',
  pageExtensions: ['mdx', 'jsx', 'js', 'ts', 'tsx'],
  target: 'serverless',
  typescript: {
    ignoreBuildErrors: true,
  },
}