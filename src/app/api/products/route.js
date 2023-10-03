import { NextResponse } from "next/server";

export async function GET(request) {

    try {

        const data = await fetch('https://fakestoreapi.com/products');
        let json_data = await data.json();

        return json_data

    } catch (error) {
        return false;
    }

}