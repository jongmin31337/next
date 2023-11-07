import { NextRequest, NextResponse } from "next/server";
// 전체페이지에실행중이기때문에 성능에 영향을 줄 수 있음
export function middleware(request: NextRequest) {
    console.log('미들웨어가 실행되고 있음! 체크중');
    if(request.nextUrl.pathname.startsWith('/products/1004')) {
        console.log('미들웨어 - 굥로를 리다이렉팅함');
        return NextResponse.redirect(new URL('/products', request.url));
    }
}



// 특정한 경로에 대해 주기
// *: zero or more
// +: one or more
// 그러니깐,
// /products/:path* path가 있거나(많거나) 없거나 둘 다 가능
// /products/:path+ path가 하나 또는 많거나
export const config = {
    matcher: ['/products/:path*']
}