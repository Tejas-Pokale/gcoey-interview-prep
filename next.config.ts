import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  eslint:{
    ignoreDuringBuilds: true,
  },
  typescipt:{
    ignoreBuildErrors: true,
  }
};

export default nextConfig;
