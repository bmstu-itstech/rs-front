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
      {
        protocol: 'http',
        hostname: '91.135.156.15',
        port: '',
        pathname: '/mock/**',
      },
      {
        protocol: 'http',
        hostname: '91.135.156.15',
        port: '',
        pathname: '/icons/**',
      },
      {
        protocol: 'http',
        hostname: '91.135.156.15',
        port: '',
        pathname: '/logo/**',
      },
      {
        protocol: 'http',
        hostname: '91.135.156.15',
        port: '',
        pathname: '/api/v0/**',
      },
    ],
    unoptimized: false,
  },
};

export default nextConfig;
