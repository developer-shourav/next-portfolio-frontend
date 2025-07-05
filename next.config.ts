// next.config.js
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'raw.githubusercontent.com',
        pathname: '/devicons/devicon/master/icons/**',
      },
      {
        protocol: 'https',
        hostname: 'img.icons8.com',
      },
      {
        protocol: 'https',
        hostname: 'www.vectorlogo.zone',
      },
      {
        protocol: 'https',
        hostname: 'i.ibb.co',
      },
      // Add any other domains you're using for images
    ],
    domains: [
      'raw.githubusercontent.com',
      'img.icons8.com',
      'www.vectorlogo.zone',
      'i.ibb.co',
    ],
  },
  // Other Next.js configuration options can go here
};

export default nextConfig;