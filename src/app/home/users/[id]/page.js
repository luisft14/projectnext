"use client";

import React, { useEffect, useState } from "react";
import DetailsUserForm from "@/components/users/detailsUser";
import { POST } from "@/app/api/users/route";
import { GETBYID } from "@/app/api/users/route";
import { useUser } from "@/context/contextUsers";
import {useRouter} from "next/navigation"

function DetailsUser({ params }) {
  
  const [title, setTitle] = useState("New User");
  const [formData, setFormData] = useState([]);
  const {addUser} = useUser();
  const router = useRouter();


  useEffect(() => {
    if (parseInt(params.id) > 0) {
      setTitle("Details User");
      getUser();

    }
    async function getUser(){

      const dataUser = await  GETBYID(params.id);

      let dataFilter = {
        email:dataUser.email,
        username:dataUser.username,
        password:dataUser.password,
        firstname:dataUser.name.firstname,
        lastname:dataUser.name.lastname,
        city:dataUser.address.city,
        street:dataUser.address.street,
        number:dataUser.address.number,
        zipcode:dataUser.address.zipcode,
        lat:dataUser.address.geolocation.lat,
        long:dataUser.address.geolocation.long,
        phone:dataUser.phone,
        passwordConfirm:dataUser.password,
        
      }

      setFormData(dataFilter);
      console.log("usuario encontrado ",dataUser);
    }

   
  }, []);

  async function newUser(data) {
    let payload = {
      email: data.email,
      username: data.username,
      password: data.password,
      name: {
        firstname: data.firstname,
        lastname: data.lastname,
      },
      address: {
        city: data.city ?? '',
        street: data.street ?? '',
        number: data.number ?? '',
        zipcode: data.zipcode ?? '',
        geolocation: {
          lat: data.lat ?? '',
          long: data.long ?? '',
        },
      },
      phone: data.phone ?? '',
    };
    const dataPost = await POST(payload);

    if(!dataPost){
      alert('Failed, create user');
    }
    
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

export default DetailsUser;
