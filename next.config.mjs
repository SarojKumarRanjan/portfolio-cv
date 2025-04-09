

// Here we use the @cloudflare/next-on-pages next-dev module to allow us to use bindings during local development
// (when running the application with `next dev`), for more information see:
// https://github.com/cloudflare/next-on-pages/blob/main/internal-packages/next-dev/README.md




const nextConfig = {
  eslint: {
    
    ignoreDuringBuilds: true,
  },
  images: { unoptimized: true },
};

export default nextConfig;
