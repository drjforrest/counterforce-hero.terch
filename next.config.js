/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    unoptimized: false,
    remotePatterns: [],
  },
  // Remove standalone for more flexible deployment
  trailingSlash: false,
  // Enable static export if needed
  // output: 'export'
}

module.exports = nextConfig
