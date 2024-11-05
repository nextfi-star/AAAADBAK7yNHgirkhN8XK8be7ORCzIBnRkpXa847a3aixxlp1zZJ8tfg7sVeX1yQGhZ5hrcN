const createNextIntlPlugin = require('next-intl/plugin')

const withNextIntl = createNextIntlPlugin()

/** @type {import('next').NextConfig} */
const nextConfig = { ignoreDuringBuilds: true }

module.exports = withNextIntl(nextConfig)
