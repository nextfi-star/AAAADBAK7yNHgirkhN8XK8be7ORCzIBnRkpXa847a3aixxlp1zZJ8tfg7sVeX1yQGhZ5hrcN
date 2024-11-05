const createNextIntlPlugin = require('next-intl/plugin')

const withNextIntl = createNextIntlPlugin()

/** @type {import('next').NextConfig} */
const nextConfig = { eslint: { ignoreDuringBuilds: true } }

module.exports = withNextIntl(nextConfig)
