// next.config.js
module.exports = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'cdn.sanity.io',
        pathname: '/images/qpv8frw8/production/*',
      },
    ],
  },
  // Abilita il supporto ai moduli Sass
  sassOptions: {
    includePaths: ['./styles'],
  },
  reactStrictMode: false,
};

