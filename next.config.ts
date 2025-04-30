// next.config.ts
import type { NextConfig } from 'next'

const nextConfig: NextConfig = {
  reactStrictMode: true,
  output: 'export',
  images: {
    unoptimized: true,
  },
  // ← note: this is now an arrow-function, not the JS method shorthand
  webpack: (config, { isServer }) => {
    // add the SVGR loader
    config.module?.rules.push({
      test: /\.svg$/,
      issuer: { and: [/\.[jt]sx?$/] },
      use: ['@svgr/webpack'],
    })

    return config
  },
}

export default nextConfig
