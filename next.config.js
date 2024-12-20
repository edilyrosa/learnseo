const { withSentryConfig } = require('@sentry/nextjs');

const nextConfig = {
  images: {
    remotePatterns: [
      { hostname: 'firebasestorage.googleapis.com' },
      { hostname: 'people.com' },
      { hostname: 'laverdadnoticias.com' },
      { hostname: 'mejorconsalud.as.com' },
      { hostname: 'aceternity.com' },
      { hostname: 'images.unsplash.com' },
    ],
  },
  webpack(config, { dev }) {
    if (dev) {
      config.devtool = 'source-map';
    }
    return config;
  },
  hideSourceMaps: true,
  disableLogger: true,
  automaticVercelMonitors: true,
};

module.exports = withSentryConfig(nextConfig, {
  silent: true,
});
