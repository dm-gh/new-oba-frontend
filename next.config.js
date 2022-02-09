/**
 * @type {import('next').NextConfig}
 */
const nextConfig = {
    images: {
        loader: "default",
        domains: ["localhost"],
    },
    webpack(config) {
        config.module.rules.push({
            test: /\.svg$/i,
            issuer: { and: [/\.(js|ts|md)x?$/] },
            use: [{ loader: "@svgr/webpack" }],
        })

        return config
    },
}

module.exports = nextConfig
