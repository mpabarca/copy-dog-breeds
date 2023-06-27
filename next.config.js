/** @type {import('next').NextConfig} */

const nextConfig = {
  reactStrictMode: true,
  publicRuntimeConfig: {
    URL_DOG_API: process.env.URL_DOG_API,
  },
};

module.exports = nextConfig;
