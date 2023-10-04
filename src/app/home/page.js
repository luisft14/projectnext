"use client";

import { createContext, useEffect } from "react";
import { useRouter } from "next/navigation";
import Nav from "@/components/simpleComponents/Nav";

function Home() {
  const router = useRouter();

  useEffect(() => {
    let data = localStorage.getItem("token") ?? false;
    if (!data) {
      router.push("/");
    }
  }, []);

  return (
    <div className="grid grid-cols-6 gap-4">
      <div className="col-start-2 col-span-4  mt-8  px-4 py-4">
        <h2 className="text-white">WELCOME TO STORE</h2>
        <img
          className="transition-all duration-300 rounded-lg cursor-pointer filter mt-4"
          src="https://img.freepik.com/vector-gratis/diseno-logotipo-local-tienda-degradado_23-2149613160.jpg?size=626&ext=jpg&ga=GA1.1.34264412.1696377600&semt=ais"
          alt="image description"
        />
      </div>
    </div>
  );
}

export default Home;
