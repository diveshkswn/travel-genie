/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    swcMinify: true,
    images: {
        domains: ['www.shutterstock.com', 'https://community.atlassian.com'],
    },
}

module.exports = nextConfig
