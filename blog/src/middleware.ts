import { NextRequest, NextResponse } from "next/server";

export function middleware(request: NextRequest) {
    console.log(request);
    console.log("미들웨어 실행중");
}