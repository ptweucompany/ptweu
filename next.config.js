/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  images: {
    unoptimized: true,
  },
  reactStrictMode: true,
  env: {
    GEMINI_API_KEY: process.env.GEMINI_API_KEY,
    APP_URL: process.env.APP_URL,
    NEXT_PUBLIC_INQUIRY_ENDPOINT: process.env.NEXT_PUBLIC_INQUIRY_ENDPOINT,
  },
};

export default nextConfig;
