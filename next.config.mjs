/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "goklwwrtrwguuuezbodj.supabase.co",
      },
      {
        protocol: "https",
        hostname: "www.material-tailwind.com",
      },
    ],
  },
};

export default nextConfig;
