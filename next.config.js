/** @type {import('next').NextConfig} */
const nextConfig = {
   
    reactStrictMode: true,
    swcMinify: true,
    images: {
        domains: ['www.shutterstock.com', 'https://community.atlassian.com'],
    },
    webpack(config, { nextRuntime }) { 
        // as of Next.js latest versions, the nextRuntime is preferred over `isServer`, because of edge-runtime
        if (typeof nextRuntime === "undefined") {
          const { IgnorePlugin } = require("webpack");
          const ignoreFs = new IgnorePlugin({ resourceRegExp: /fs/ });
          config.plugins.push(ignoreFs);
        }
        config.externals = [...config.externals, 'hnswlib-node'];  // by adding this line, solved the import
        return config;
      },
}

module.exports = nextConfig
