/** @type {import('next').NextConfig} */

const nextConfig = {
    
    logging:{
        fetches:{
            fullUrl: true
        }
    },
    images: {
        remotePatterns: [
            {protocol: 'https', hostname:'cdn.pixabay.com', pathname: '/**'}
        ]
    }
};

export default nextConfig;
