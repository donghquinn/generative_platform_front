const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  output: "standalone",
   images: {
    domains: ['oaidalleapiprodscus.blob.core.windows.net'],
  },
}

module.exports = nextConfig