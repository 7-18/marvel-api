/** @type {import('next').NextConfig} */

const nextConfig = {
  env: {
    MARVEL_PUBLIC_API_KEY: process.env.NEXT_PUBLIC_MARVEL_PUBLIC_KEY,
    MARVEL_PRIVATE_API_KEY: process.env.NEXT_PUBLIC_MARVEL_PRIVATE_KEY,
    MARVEL_API_HOST: "https://gateway.marvel.com",
  },
  images: {
    domains: ["gateway.marvel.com", "i.annihil.us"],
  },
};

module.exports = nextConfig;
