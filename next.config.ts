import type {NextConfig} from 'next';

const nextConfig: NextConfig = {
  webpack: config => {
    config.output.chunkFilename = '[name].[contenthash].js';
    return config;
  },
  images: {
    remotePatterns: [
      {
        protocol: 'http',
        hostname: '127.0.0.1',
        port: '8000',
      },
    ],
  },
};

export default nextConfig;
