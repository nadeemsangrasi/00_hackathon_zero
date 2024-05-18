/** @type {import('next').NextConfig} */
const nextConfig = {
  webpack: (config, { isServer }) => {
    if (!isServer) {
      config.resolve = {
        ...config.resolve,
        fallback: {
          fs: false,
        },
      };
    }
    return config;
  },
  experimental: {
    serverActions: true,
  },
};

export default nextConfig;
