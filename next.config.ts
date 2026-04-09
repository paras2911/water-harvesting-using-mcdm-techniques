import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Allow Leaflet map tiles from external sources  
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "**.openstreetmap.org",
      },
      {
        protocol: "https",
        hostname: "unpkg.com",
      },
    ],
  },
};

export default nextConfig;
