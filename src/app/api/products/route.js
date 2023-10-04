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
export async function GETBYID(request) {

    try {

        const data = await fetch('https://fakestoreapi.com/products/'+request);
        let json_data = await data.json();

        return json_data

    } catch (error) {
        return false;
    }

}

export async function POST(request) {

    try {

        const data = await fetch('https://fakestoreapi.com/products',{
            method:"POST",
            body:JSON.stringify(request)
        });
        let json_data = await data.json();

        return json_data

    } catch (error) {
        return false;
    }

}

export async function UPDATE(request) {

    try {

        const data = await fetch('https://fakestoreapi.com/products/'+request.id,{
            method:"PUT",
            body:JSON.stringify({
                title: request.title,
                price: request.price,
                description: request.description,
                image: request.image,
                category: request.category
            })
        })
        let json_data = await data.json();

        return json_data

    } catch (error) {
        return false;
    }

}

