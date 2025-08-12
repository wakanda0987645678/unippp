/** @type {import('next').NextConfig} */
const nextConfig = {
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "pump.mypinata.cloud",
        port: "",
      },
      {
        protocol: "https",
        hostname: "res.cloudinary.com",
        port: "",
      },
    ],
    unoptimized: true,
  },
  webpack: (config) => {
    config.resolve.fallback = { 
      fs: false, 
      net: false, 
      tls: false,
      events: false,
      eventemitter2: false,
      stream: false,
      crypto: false,
      http: false,
      https: false,
      os: false,
      url: false,
      assert: false,
      util: false,
      buffer: false,
      process: false
    };
    config.externals.push("pino-pretty", "lokijs", "encoding", "eventemitter2");
    return config;
  },
};

export default nextConfig;
