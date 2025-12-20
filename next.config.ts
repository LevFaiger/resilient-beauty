import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Enable static export for Digital Ocean static site
  output: 'export',
  trailingSlash: true,

  images: {
    unoptimized: true, // Required for static export
  },

  // Empty turbopack config to use Turbopack (Next.js 16 default)
  turbopack: {},
};

export default nextConfig;
