import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export", // Enable static export for GitHub Pages
  trailingSlash: true, // Optional but recommended for GitHub Pages routing
  images: {
    unoptimized: true, // Required for `next/image` to work without server
  },
  webpack(config) {
    config.module.rules.push({
      test: /\.svg$/,
      use: ["@svgr/webpack"],
    });
    return config;
  },
};

export default nextConfig;
