/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: false,
    env: {
      NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME: "dljqpsuv6",
      NEXT_PUBLIC_CLOUDINARY_PRESET_NAME:"projectImage"
    },
    images: {
        domains: ["res.cloudinary.com"],
      },
  };
  export default nextConfig;