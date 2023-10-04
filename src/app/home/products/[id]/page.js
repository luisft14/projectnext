"use client";

import React, { useEffect, useState } from "react";
import DetailsUserForm from "@/components/users/detailsUser";
import { POST } from "@/app/api/users/route";
import { GETBYID } from "@/app/api/users/route";
import { useUser } from "@/context/contextUsers";
import {useRouter} from "next/navigation"

function DetailsProduct({ params }) {
  
  const [title, setTitle] = useState("New Product");
  const [formData, setFormData] = useState([]);
  //const {addUser} = useUser();
  const router = useRouter();


  useEffect(() => {
    if (parseInt(params.id) > 0) {
      setTitle("Details Product");
      getUser();

    }
    async function getUser(){
      const dataUser = await  GETBYID(params.id);
      setFormData(dataUser);
      console.log("usuario encontrado ",dataUser);
    }

   
  }, []);

  async function newUser(data) {
    let payload = {
      email: data.email,
      username: data.userName,
      password: data.password,
      name: {
        firstname: data.firstName,
        lastname: data.lastName,
      },
      address: {
        city: data.city ?? '',
        street: data.street ?? '',
        number: data.number ?? '',
        zipcode: data.zipcode ?? '',
        geolocation: {
          lat: data.latitude ?? '',
          long: data.long ?? '',
        },
      },
      phone: data.number ?? '',
    };
    const dataPost = await POST(payload);
    
    let dataUser = {
      ...payload,
      id:dataPost.id
    }
    addUser(dataUser);

    console.log("agregado",dataPost);
    router.push("/home/users");

  }

  return (
    <div>
      <DetailsUserForm title={title} newUser={newUser} data={formData}></DetailsUserForm>
    </div>
  );
}

export default DetailsProduct;
