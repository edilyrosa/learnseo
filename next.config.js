
/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
      remotePatterns: [
        { hostname: 'firebasestorage.googleapis.com'},
        { hostname: 'people.com' },  
        { hostname: 'laverdadnoticias.com' },  
        { hostname: 'mejorconsalud.as.com' },  
        { hostname: 'aceternity.com' },  
        { hostname: 'www.ultimochisme.com' },  
      ]
    }
  }
  
  module.exports = nextConfig
  