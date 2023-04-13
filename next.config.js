/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    distDir: "build",
    images: {
        domains: [
            "seeklogo.com",
            "fastly.picsum.photos",
            "www.teaminertia.com",
            "www.hotelhub.com",
        ],
    },
    eslint: {
        ignoreDuringBuilds: true,
    },
};

module.exports = nextConfig;
