/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  // reactCompiler: true, // You can keep this if you are using the React 19 compiler
  images: {
    unoptimized: true,
  },
  // Add this line to prevent Turbopack from bundling Prisma incorrectly
  serverExternalPackages: ["@prisma/client"],
};

export default nextConfig;
