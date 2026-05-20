/** @type {import('next').NextConfig} */
const isGithubPages = process.env.GITHUB_PAGES === "true";

const nextConfig = {
  output: isGithubPages ? "export" : undefined,
  basePath: isGithubPages ? "/portfolio" : undefined,
  assetPrefix: isGithubPages ? "/portfolio/" : undefined,
  trailingSlash: isGithubPages,
  experimental: {
    optimizePackageImports: ["lucide-react", "recharts", "framer-motion"]
  },
  images: {
    unoptimized: isGithubPages,
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.unsplash.com"
      },
      {
        protocol: "https",
        hostname: "github-readme-stats.vercel.app"
      }
    ]
  }
};

export default nextConfig;
