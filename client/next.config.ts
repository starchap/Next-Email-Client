import type { NextConfig } from "next";

const nextConfig: NextConfig = {
    async redirects() {
        return [
            {source: '/', destination: '/active/#', permanent: true},
        ]
    },
    async rewrites() {
        return [
            { source: "/api/emails/:id", destination: "http://localhost:5001/emails/:id" },
        ]
    }
};

export default nextConfig;
