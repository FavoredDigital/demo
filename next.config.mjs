/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  basePath: '/demo',
  assetPrefix: '/demo',
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    unoptimized: true,
  },
}

export default nextConfig
