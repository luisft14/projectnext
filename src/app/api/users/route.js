import { NextResponse } from "next/server";

export async function GET(request) {

    try {

        const data = await fetch('https://fakestoreapi.com/users');
        let json_data = await data.json();

        return json_data

    } catch (error) {
        return false;
    }

}

export async function GETBYID(request) {

    try {

        const data = await fetch('https://fakestoreapi.com/users/'+request);
        let json_data = await data.json();

        return json_data

    } catch (error) {
        return false;
    }

}

export async function POST(request) {

    try {

        const data = await fetch('https://fakestoreapi.com/users',{
            method:"POST",
            body:JSON.stringify(request)
        });

        let json_data = await data.json();

        return json_data

    } catch (error) {
        return false;
    }

}

export async function DELETE(request) {

    try {

        const data = await fetch('https://fakestoreapi.com/users/'+request);
        let json_data = await data.json();

        return json_data

    } catch (error) {
        return false;
    }

}