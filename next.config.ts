const isDev = process.env.NODE_ENV === 'development';

module.exports = {
  images: {
    remotePatterns: [
      ...(isDev
        ? [
            {
              protocol: 'http',
              hostname: '127.0.0.1',
            },
            {
              protocol: 'http',
              hostname: 'localhost',
            },
          ]
        : []),
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
  },
};
