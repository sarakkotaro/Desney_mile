/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: false, // `app` ディレクトリの使用を有効にする
  },
  images: {
    domains: ["nquqzhtbapbnjkyudrwl.supabase.co"], // Supabase 画像ストレージのドメイン
  },
};

export default nextConfig;
