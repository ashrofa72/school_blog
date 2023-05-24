/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ['www.w3schools.com', 'res.cloudinary.com', 'drive.google.com'],
  },
};
module.exports = nextConfig;
