/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  poweredByHeader: false,
  productionBrowserSourceMaps: false,
  env: {
    apiServerUrl: 'https://mono-server.matsco.de/api',
    appUrl: 'https://mono-app.matsco.de'
  }
}

module.exports = nextConfig
