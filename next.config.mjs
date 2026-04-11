/** @type {import('next').NextConfig} */
const nextConfig = {
  basePath: '/demo',
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    unoptimized: true,
  },
}

export default nextConfig
