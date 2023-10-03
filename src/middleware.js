import { NextResponse } from "next/server";

export function middleware(request){

    if(request.nextUrl.pathname.includes("/users")){
        console.log(request.nextUrl.pathname);
        if (typeof window !== 'undefined') {
            // Perform localStorage action
            const item = localStorage.getItem('token')
            console.log("token",item);

          }
        console.log("no paso");

    }
    return NextResponse.next();
}