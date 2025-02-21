/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        domains: ['media.licdn.com'], // Add LinkedIn's media domain
        remotePatterns: [
          {
            protocol: 'https',
            hostname: 'media.licdn.com',
            port: '',
            pathname: '/**',
          },
        ],
      },
};

export default nextConfig;
