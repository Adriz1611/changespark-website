/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    qualities: [100, 75],
    remotePatterns: [
      {
        protocol: "https",
        hostname: "goklwwrtrwguuuezbodj.supabase.co",
      },
      {
        protocol: "https",
        hostname: "eexvwdvzaibdautasttz.supabase.co",
      },
      {
        protocol: "https",
        hostname: "www.material-tailwind.com",
      },
      {
        protocol: "https",
        hostname: "placehold.co",
      },
    ],
  },
};

export default nextConfig;
