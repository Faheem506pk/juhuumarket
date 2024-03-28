<<<<<<< HEAD
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
=======
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
>>>>>>> 692540d5dfa2208507b8809e0a7a3d145f0a32ec
