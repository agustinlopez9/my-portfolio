/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  async redirects() {
    return [
      {
        source: "/",
        destination: "/preview",
        permanent: true,
      },
    ];
  },
}

module.exports = nextConfig
