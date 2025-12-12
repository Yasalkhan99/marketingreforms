import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async redirects() {
    return [
      {
        source: '/:path*',
        has: [
          {
            type: 'host',
            value: 'marketingreforms.com',
          },
        ],
        destination: 'https://www.marketingreforms.com/:path*',
        permanent: true, // 301 redirect (SEO-friendly)
      },
    ];
  },
};

export default nextConfig;
