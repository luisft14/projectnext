"use client"
import React, { useEffect, useState } from 'react'
import {GET}  from "@/app/api/products/route";
import Table from '@/components/fabricaComponents/Table';

function Products() {

  const [users, setUsers] = useState([]);
  const [columns, setColums] = useState([]);
  const [actions, setActions] = useState(['Details','Edit','Delete']);

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
      setUsers(filterData);
    }

    async function getColumns(){
      let columns = [
        {value:'id',name:'Id'},
        {value:'title',name:'Title'},
        {value:'price',name:'Price'},
      ];
      setColums(columns);
    }

    getData();
    getColumns();

  }, [])
  
  return (
    <div>
        <p className='text-white'>Products</p>
        <Table title={'Products'} data={users} columns={columns} actions={actions}></Table>
    </div>
  )
}

export default Products