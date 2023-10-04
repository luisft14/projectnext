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
  const [typeOrder, setTypeOrder] = useState(false);
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

  function orderByColum(column){

    let copyData = [...products]
    setTypeOrder(!typeOrder);
      if(!typeOrder){

        let ordenado = copyData.sort((a,b)=>b[column]-a[column]);
        setProducts([...ordenado]);
      }else{
        let ordenado = copyData.sort((a,b)=>a[column]-b[column]);
        setProducts([...ordenado]);
      }
    
    
  }
  
  return (
    <div>
        <Table title={'Products'} data={products} columns={columns} actions={actions} add={openAddProduct} show={openShowProduct} deleteI={deleteProduct} reload={reloadProducts} orderByColum={orderByColum}></Table>

    </div>
  )
}

export default Products