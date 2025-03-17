const createNextIntlPlugin = require('next-intl/plugin')

const withNextIntl = createNextIntlPlugin()

/** @type {import('next').NextConfig} */
const nextConfig = {
	eslint: {
		ignoreDuringBuilds: true,
	},
	cacheMaxMemorySize: 256,
	images: {
        domains: ['nextfi.io'],
    },
}

module.exports = withNextIntl(nextConfig)

