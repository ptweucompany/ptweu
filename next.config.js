/** @type {import('next').NextConfig} */
const nextConfig = {
  // output: 'export' dihapus — tidak kompatibel dengan API routes & ISR
  // Gunakan 'next build' biasa untuk deploy ke Vercel/server
  images: {
    unoptimized: true,
    qualities: [60, 75, 85, 90],
    deviceSizes: [640, 750, 828, 1080, 1200, 1920],
    imageSizes: [16, 32, 64, 96, 128, 256, 384],
    formats: ['image/webp'],
  },
  reactStrictMode: true,
  env: {
    GEMINI_API_KEY: process.env.GEMINI_API_KEY,
    APP_URL: process.env.APP_URL,
    NEXT_PUBLIC_INQUIRY_ENDPOINT: process.env.NEXT_PUBLIC_INQUIRY_ENDPOINT,
  },
};

export default nextConfig;
