import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "standalone",
  typescript: {
    ignoreBuildErrors: true,
  },
  eslint: {
    ignoreDuringBuilds: true,
  },
  reactStrictMode: false,
  allowedDevOrigins: [
    "*.space-z.ai",
    "*.chatglm.cn",
    "localhost",
    "127.0.0.1",
  ],
  images: {
    formats: ["image/avif", "image/webp"],
    remotePatterns: [],
  },
  compress: true,
  poweredByHeader: false,
};

export default nextConfig;
