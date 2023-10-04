"use client";

import React, { useEffect, useState } from "react";
import { POST } from "@/app/api/products/route";
import { GETBYID } from "@/app/api/products/route";
import { UPDATE } from "@/app/api/products/route";
import { useProduct } from "@/context/contextProducts";
import {useRouter} from "next/navigation"
import ProductsForm from "@/components/products/ProductsForm";

function DetailsProduct({ params }) {
  
  const [title, setTitle] = useState("New Product");
  const [formData, setFormData] = useState([]);
  const {addProduct,putProduct} = useProduct();
  const router = useRouter();


  useEffect(() => {
    if (parseInt(params.id) > 0) {
      setTitle("Details Product");
      getProduct();

    }
    async function getProduct(){
      const dataProduct = await  GETBYID(params.id);
      setFormData(dataProduct);
      console.log("producto encontrado ",dataProduct);
    }

   
  }, []);


  async function newProduct(data) {
    
    let payload = {
        title: data.title,
        price: data.price,
        description: data.description,
        image: data.image,
        category: data.category
    };
    const dataPost = await POST(payload);
    if(!dataPost){
        alert('Failed create Product');
    }else{

        let dataProduct = {
          ...payload,
          id:dataPost.id
        }
    
        addProduct(dataProduct);
    
        console.log("agregado",dataPost);
        router.push("/home/products");
    }

  }

  async function updateProduct(data){
    console.log("data update product",data);
    const dataUpdate =  await UPDATE(data);
    if(!dataUpdate){
        alert("Failed update product");
    }else{
        console.log("update",dataUpdate);
        //putProduct(dataUpdate);
        router.push("/home/products");
    }

  }

  return (
    <div>
      <ProductsForm title={title} newProduct={newProduct}  data={formData} updateProduct={updateProduct}></ProductsForm>
    </div>
  );
}

export default DetailsProduct;
