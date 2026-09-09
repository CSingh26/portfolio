import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Keep review builds separate when a local development server is running.
  distDir: process.env.PORTFOLIO_BUILD_DIR || ".next",
};

export default nextConfig;
