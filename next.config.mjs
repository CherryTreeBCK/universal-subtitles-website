/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",
  basePath: "/universal-subtitles-website",
  assetPrefix: "/universal-subtitles-website",
  trailingSlash: true,
  reactStrictMode: true,
  images: {
    unoptimized: true,
  },
  webpack(config) {
    config.module.rules.push({
      test: /\.svg$/,
      use: [
        {
          loader: '@svgr/webpack',
          options: {
            svgoConfig: {
              plugins: [
                {
                  name: 'removeViewBox',
                  active: false,
                },
              ],
            },
          },
        },
      ],
    })
    return config
  },
}

export default nextConfig
