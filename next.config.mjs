/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    remotePatterns: [
      {
        hostname: "https://source.unsplash.com",
      },
    ],
  },
};

export default nextConfig;
