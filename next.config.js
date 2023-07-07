/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    unoptimized: true,
  },
  output: "export",
  distDir:'/docs',
  basePath:'/docs'
};

module.exports = nextConfig;
