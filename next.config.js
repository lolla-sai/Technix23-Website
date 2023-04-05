/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    images: {
        domains: ["seeklogo.com", "fastly.picsum.photos"],
    },
    eslint: {
        ignoreDuringBuilds: true,
    },
    distDir: "build",
};

module.exports = nextConfig;
