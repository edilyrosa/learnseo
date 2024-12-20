const { withSentryConfig } = require('@sentry/nextjs');

const nextConfig = {
  reactStrictMode: true, // Habilita el modo estricto para desarrollo y producción
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
  env: {
    NEXT_PUBLIC_SUPABASE_URL: process.env.NEXT_PUBLIC_SUPABASE_URL,
    NEXT_PUBLIC_SUPABASE_ANON_KEY: process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY,
  },
  productionBrowserSourceMaps: false, // Para ocultar los mapas de origen en producción
  sentry: {
    hideSourceMaps: true, // Evita la exposición de mapas de origen en errores reportados
    disableLogger: true, // Desactiva el registro en consola
    automaticVercelMonitors: true,
  },
};

module.exports = withSentryConfig(nextConfig, {
  silent: true, // Reduce los logs de Sentry durante la compilación
});
