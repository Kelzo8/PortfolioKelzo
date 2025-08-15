import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      { protocol: "https", hostname: "images.unsplash.com" },
      { protocol: "https", hostname: "avatars.githubusercontent.com" },
    ],
  },
  experimental: {
    optimizePackageImports: [
      "framer-motion",
      "lucide-react",
      "three",
      "@react-three/fiber",
      "@react-three/drei",
    ],
  },
};

export default nextConfig;
