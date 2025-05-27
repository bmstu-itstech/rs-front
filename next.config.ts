import type {NextConfig} from 'next';

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'http',
        hostname: '91.135.156.15',
        port: '',
        pathname: '/media/**',
      },
    ],
  },
};

export default nextConfig;
