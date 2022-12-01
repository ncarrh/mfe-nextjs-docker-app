/** @type {import('next').NextConfig} */
const NextFederationPlugin = require("@module-federation/nextjs-mf");

const nextConfig = {
  webpack: (config, options) => {
    const location = options.isServer ? "ssr" : "chunks";
    const mfConfig = {
      name: "login",
      filename: `remoteEntry.js`,
      exposes: { "./login": "./pages/index.tsx" },
      remotes: {
        pdp: `pdp@http://localhost:3000/_next/static/${location}/remoteEntry.js`,
      },
    };

    config.plugins.push(new NextFederationPlugin(mfConfig));

    return config;
  },
};

module.exports = nextConfig;
