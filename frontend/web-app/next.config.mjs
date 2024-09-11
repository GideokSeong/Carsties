/** @type {import('next').NextConfig} */
import { setGlobalDispatcher, Agent } from 'undici';



const nextConfig = {
    
    logging:{
        fetches:{
            fullUrl: true
        }
    },
    images: {
        unoptimized: true,
        loader: 'default',
        minimumCacheTTL: 60,
        remotePatterns: [
            {protocol: 'https', hostname:'cdn.pixabay.com', port: '', pathname: '/**'}
        ]
    }
};

export default nextConfig;
