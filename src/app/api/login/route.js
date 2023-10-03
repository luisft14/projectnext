import { NextResponse } from "next/server";

export async function POST(request) {

    try {
        let url = "https://fakestoreapi.com/auth/login";
        const data = await fetch(url, {
          method: "POST", // or 'PUT'
          body: JSON.stringify(request), // data can be `string` or {object}!
          headers: {
            "Content-Type": "application/json",
          },
        });
        let json_data = await data.json();
        return json_data
    } catch (error) {
        return false;
    }

   

}
