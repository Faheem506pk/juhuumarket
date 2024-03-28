    /** @type {import('next').NextConfig} */


    const nextConfig = {
        images: {
            remotePatterns: [
                {
                    protocol: process.env.CDN_PROTOCOL === "https" ? "https" : "http",
                    hostname: process.env.CDN_HOSTNAME || "",
                    pathname: process.env.CDN_PATHNAME || ""
                }
            ]
        },
};

export default nextConfig;
