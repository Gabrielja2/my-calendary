/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    env: {
        API_BASE_URL: process.env.API_BASE_URL,
        JWT_TOKEN: process.env.JWT_TOKEN,
    },
};

module.exports = nextConfig;
