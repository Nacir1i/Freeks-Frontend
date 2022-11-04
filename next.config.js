/** @type {import('next').NextConfig} */
const nextConfig = {
  distDir: "build",
  reactStrictMode: true,
  swcMinify: true,
  images: {
    unoptimized: true,
  },
  assetPrefix: "./",
};

module.exports = nextConfig;
