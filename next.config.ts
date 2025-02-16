import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    domains: [
      "assets.aceternity.com",
      "i.pravatar.cc", // Added i.pravatar.cc
    ],
  },
};

export default nextConfig;
