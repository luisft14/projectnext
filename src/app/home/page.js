"use client"

import { createContext, useEffect } from "react";
import {useRouter} from "next/navigation"
import Nav from "@/components/simpleComponents/Nav";

function Home() {
  const router = useRouter();

    useEffect(() => {
        let data = localStorage.getItem('token') ?? false;
        if(!data){
            router.push("/");
        }
    }, [])
    
  return (
    <div>
     
    </div>
  )
}

export default Home