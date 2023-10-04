"use client"
import React, { useEffect, useState } from 'react'
import {GET}  from "@/app/api/products/route";
import Table from '@/components/fabricaComponents/Table';
import {useRouter} from "next/navigation"
import { useProduct } from '@/context/contextProducts';


function Products() {

  const router = useRouter();

  const [products, setProducts] = useState([]);
  const [columns, setColums] = useState([]);
  const [actions, setActions] = useState(['Details','Edit','Delete']);
  const {dataProducts} = useProduct();


  useEffect(() => {

    async function getData(){

      let data = await GET();

      let filterData = [];

      filterData = data.map(item=>{
        
        let newItem = {
          id:item.id,
          title:item.title,
          price:item.price,
        }

        return newItem;
      })

      dataProducts.map(item =>{
        let newItem = {
          id:item.id,
          title:item.title,
          price:item.price,
        }
        filterData.push(newItem);
      })

      setProducts(filterData);
    }

    async function getColumns(){
      let columns = [
        {value:'id',name:'Id',filter:true},
        {value:'title',name:'Title'},
        {value:'price',name:'Price',filter:true},
      ];
      setColums(columns);
    }

    getData();
    getColumns();

  }, [])

  function openAddProduct(event){
   
    router.push("/home/products/:id");
  }

  function openShowProduct(event){
   
    router.push("/home/products/"+event);
  }

  function deleteProduct(event){
    console.log("delete ",event);
    //router.push("/home/users/"+event);
    const productsFilter = products.filter(item => item.id != event);
    setProducts(productsFilter);
  }

  async function reloadProducts(){
    let data = await GET();

    let filterData = [];

    filterData = data.map(item=>{
      
      let newItem = {
        id:item.id,
        title:item.title,
        price:item.price,
      }

      return newItem;
    })
    setProducts(filterData);
  }
  
  return (
    <div>
        <p className='text-white'>Products</p>
        <Table title={'Products'} data={products} columns={columns} actions={actions} add={openAddProduct} show={openShowProduct} deleteI={deleteProduct} reload={reloadProducts}></Table>

    </div>
  )
}

export default Products