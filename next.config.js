/** @type {import('next').NextConfig} */
const nextConfig = {
    experimental: {
        appDir: true,
        serverComponentsExternalPackages: ["@emurgo/cardano-serialization-lib-nodejs"]
    },
    styledComponents: true,
    webpack: function (config, { isServer, dev }) {
        config.experiments = {
            asyncWebAssembly: true,
            layers: true,

        };
        config.output.webassemblyModuleFilename = 'static/wasm/[modulehash].wasm'
        return config;
    },
};

module.exports = nextConfig;
