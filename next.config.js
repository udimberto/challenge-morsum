/** @type {import('next').NextConfig} */
const withPWA        = require('next-pwa')
const runtimeCaching = require('next-pwa/cache')

const nextConfigWithPWA = (config) => withPWA({
  ...(config || {}),
  pwa: {
    dest: 'public',
    runtimeCaching,
  },
})

const nextConfig = {
  reactStrictMode: false,
}

module.exports = process.env.NODE_ENV !== 'production' ? nextConfig : nextConfigWithPWA(nextConfig)
