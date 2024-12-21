/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "black-wallet.uz",
        pathname: '/photos/**',
      },
    ],
    unoptimized: true,
  },
  trailingSlash: false,
  output: 'export',
};

export default nextConfig;
