import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  output: "standalone",

  typescript: {
    // Docker build ma TS errors ignore garchha
    ignoreBuildErrors: true,
  },
};

export default nextConfig;
