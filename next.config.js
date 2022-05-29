/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  env: {
    customKey: '#####',
  },
  pageExtensions: ['mdx', 'md', 'jsx', 'tsx', 'ts'],
};

module.exports = nextConfig
