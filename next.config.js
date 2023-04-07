/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    distDir: "build",
    images: {
        domains: ["seeklogo.com", "fastly.picsum.photos"],
    },
};

module.exports = nextConfig;
