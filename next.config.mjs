/** @type {import('next').NextConfig} */
const nextConfig = {
  poweredByHeader: false,

  images: {
    // 対応ブラウザには AVIF / WebP を配信し、転送量を削減する
    formats: ['image/avif', 'image/webp'],
    deviceSizes: [360, 480, 640, 750, 828, 1080, 1200, 1440, 1920, 2048],
    imageSizes: [16, 32, 48, 64, 96, 128, 160, 256, 384],
    minimumCacheTTL: 60 * 60 * 24 * 30,
  },

  async redirects() {
    return [
      /**
       * non-www → www の恒久リダイレクト。
       * 条件は host が非wwwのときのみ成立するため、リダイレクト後の
       * www ホストでは再度マッチせずループしない。
       * Vercel のドメイン設定側でも同方向のリダイレクトを設定している場合は、
       * どちらか一方に統一しておくとリクエストが1回で済む。
       */
      {
        source: '/:path*',
        has: [{ type: 'host', value: 'maruyoshi-official.com' }],
        destination: 'https://www.maruyoshi-official.com/:path*',
        permanent: true,
      },
    ]
  },

  async headers() {
    return [
      {
        source: '/:path*',
        headers: [
          { key: 'X-Content-Type-Options', value: 'nosniff' },
          { key: 'Referrer-Policy', value: 'strict-origin-when-cross-origin' },
          { key: 'X-DNS-Prefetch-Control', value: 'on' },
        ],
      },
      {
        // 画像は長期キャッシュ（内容が変わる場合はファイル名を変更する）
        source: '/images/:path*',
        headers: [{ key: 'Cache-Control', value: 'public, max-age=2592000, must-revalidate' }],
      },
    ]
  },
}

export default nextConfig
