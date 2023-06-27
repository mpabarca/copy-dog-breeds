/** @type {import('next').NextConfig} */

const nextConfig = {
  reactStrictMode: true,
  publicRuntimeConfig: {
    URL_DOG_API: process.env.URL_DOG_API,
  },
  images: {
    domains: ['images.dog.ceo'],
  },
};

module.exports = nextConfig;
