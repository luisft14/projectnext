"use client"
import React, { useEffect, useState } from 'react'
import {GET}  from "@/app/api/users/route";
import Table from '@/components/fabricaComponents/Table';
function Users() {

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
          username:item.username,
          email:item.email,
          name:item.name.firstname,
          lastname:item.name.lastname,
        }

        return newItem;
      })
      setUsers(filterData);
    }

    async function getColumns(){
      let columns = [
        {value:'id',name:'Id'},
        {value:'username',name:'User Name'},
        {value:'email',name:'Email'},
        {value:'name',name:'Firs Name'},
        {value:'lastname',name:'Last Name'},
      ];
      setColums(columns);
    }

    getData();
    getColumns();

  }, [])
  
  return (
    <div>
        <p className='text-white'>Users</p>
        <Table title={'Users'} data={users} columns={columns} actions={actions}></Table>
    </div>
  )
}

export default Users