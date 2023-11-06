/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
            {
                protocol: 'https',
                hostname: 'images.unsplash.com',
            }
        ]
    },
    async redirects() {
        return [
            {
                source: '/products/deleted_forever',
                destination: '/products',
                permanent: true, // 이 source는 destination으로 이동했으니까 너는 안심하고 캐시해도되.. 임시적일때는 false가 좋음
            }
        ]
    }
}

module.exports = nextConfig
