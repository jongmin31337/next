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
    // a를 b로 데려가기 (정적)
    async redirects() {
        return [
            {
                source: '/products/deleted_forever',
                destination: '/products',
                permanent: true, // 이 source는 destination으로 이동했으니까 너는 안심하고 캐시해도되.. 임시적일때는 false가 좋음
            }
        ]
    },
    // 복잡하고 거추장한 url을 다른거로 대체
    // 해당 복잡한 url을 다른거로 덮어씌움.. 보안을 위해서라도 프로젝트 구조를 노출안시킬역할로 사용할 수 도 있다.
    async rewrites() {
        return [
            {
                source: '/jongmin',
                destination: '/about/me/jongmin',
            },
            {
                source: '/items/:slug',
                destination: '/products/:slug'
            }
        ]
    }
}

module.exports = nextConfig
