import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  basePath: "/focus",
  env: {
    NEXT_PUBLIC_BASE_PATH: "/focus",
  },
  images: {
    unoptimized: true,
    remotePatterns: [
      {
        protocol: "https",
        hostname: "lh3.googleusercontent.com"
      }
    ]
  }
};

export default nextConfig;
