const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  output: "standalone",
  images: {
    domains: ['oaidalleapiprodscus.blob.core.windows.net'],
  },
  //  experimental: {
  //   // this includes files from the monorepo base two directories up
  //   outputFileTracingRoot: path.join(__dirname, '../../'),
  // },
}

module.exports = nextConfig