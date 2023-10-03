"use client"
import { NextResponse } from "next/server";
import { useContext } from "react";
import { TokenContext } from "./context/contextToken";

export function middleware(request){

    // 
    
    if(request.nextUrl.pathname.includes("/users")){
        //console.log(request.nextUrl.pathname);
        if (typeof window !== 'undefined') {
            
            const item = localStorage.getItem("token");
            //console.log("item");


        }
        //console.log("no paso");

    }
    return NextResponse.next();
}