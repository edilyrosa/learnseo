
/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
      remotePatterns: [
        { hostname: 'firebasestorage.googleapis.com'},
        { hostname: 'people.com' },  
        { hostname: 'laverdadnoticias.com' },  
        { hostname: 'mejorconsalud.as.com' },  
      ]
    }
  }
  
  module.exports = nextConfig