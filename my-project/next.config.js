const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ['www.facebookbrand.com'],
  },
  webpack: (config, { isServer }) => {
    // Fixes npm packages that depend on `fs` module
    if (!isServer) {
      config.resolve.fallback = { fs: false };
    }

    // Add raw-loader to handle .md files
    config.module.rules.push({
      test: /\.md$/,
      use: 'raw-loader',
    });

    return config;
  },
};

module.exports = nextConfig;
