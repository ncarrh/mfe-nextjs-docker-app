/** @type {import('next').NextConfig} */
const { FederatedTypesPlugin } = require("@module-federation/typescript");
// const { NextFederationPlugin } = require("@module-federation/nextjs-mf");

module.exports = {
  typescript: {
    ignoreBuildErrors: true,
  },
  webpack: (config, options) => {
    const { buildId, dev, isServer, defaultLoaders, webpack } = options;
    const federationConfig = {
      name: "home",
      filename: "static/remoteEntry.js",
      exposes: {
        "./button": "./components/button",
        "./home": "./pages/index",
      },
    };

    config.plugins.push(
      new webpack.container.ModuleFederationPlugin(federationConfig),
      new FederatedTypesPlugin({ federationConfig })
    );

    config.watchOptions = {
      poll: 1000,
      aggregateTimeout: 300,
    };

    if (!isServer) {
      config.output.publicPath = "http://localhost:5001/_next/";
    }
    // config.chunk = {};
    config.infrastructureLogging = {
      level: "verbose",
    };
    return config;
  },
};

// const federationConfig = {
//   name: "home",
//   filename: "static/chunks/remoteEntry.js",
//   exposes: {
//     "./button": "./components/button.tsx",
//     "./home": "./pages/index.tsx",
//   },
//   //shared: [] sharing libraries
// };

// const nextConfig = {
//   reactStrictMode: true,
//   swcMinify: true,
//   webpack: (config, { dev, isServer, webpack }) => {
//     const { ModuleFederationPlugin } = webpack.container;
//     config.plugins.push(
//       new ModuleFederationPlugin(federationConfig),
//       new FederatedTypesPlugin({ federationConfig })
//     );

//     config.watchOptions = {
//       poll: 1000,
//       aggregateTimeout: 300,
//     };

//     return config;
//   },
// };

// module.exports = nextConfig;
