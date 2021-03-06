/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ["images.unsplash.com","buiildr.com"],
  },
  async redirects() {
    return [
      {
        source: "/",
        destination: "/all",
        permanent: true,
      },
    ];
  },
};

module.exports = nextConfig;
