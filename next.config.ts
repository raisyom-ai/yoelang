import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: true,
  typescript: {
    // TS errors are checked by `bun run lint` in CI/CD
    // Disabling here prevents build failures from non-critical type issues
    ignoreBuildErrors: true,
  },
  turbopack: {},
};

export default nextConfig;
