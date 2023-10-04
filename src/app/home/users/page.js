"use client"
import React, { useEffect, useState } from 'react'
import {GET}  from "@/app/api/users/route";
import Table from '@/components/fabricaComponents/Table';
import {useRouter} from "next/navigation"
import { useUser } from '@/context/contextUsers';

function Users() {

  const router = useRouter();

  const [users, setUsers] = useState([]);
  const [columns, setColums] = useState([]);
  const [actions, setActions] = useState(['Details','Edit','Delete']);
  const {dataUsers} = useUser();

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

      dataUsers.map(item =>{
        let newItem = {
          id:item.id,
          username:item.username,
          email:item.email,
          name:item.name.firstname,
          lastname:item.name.lastname,
        }
        filterData.push(newItem);
      })

      setUsers(filterData);
      
    }

    async function getColumns(){
      let columns = [
        {value:'id',name:'Id',filter:true},
        {value:'username',name:'User Name'},
        {value:'email',name:'Email',filter:true},
        {value:'name',name:'Firs Name'},
        {value:'lastname',name:'Last Name'},
      ];
      setColums(columns);
    }

    getData();
    getColumns();
    console.log("data context en page ",dataUsers);

  }, [])

  function openAddUser(event){
   
    router.push("/home/users/:id");
  }

  function openShowUser(event){
   
    router.push("/home/users/"+event);
  }

  function deleteUser(event){
    console.log("delete ",event);
    //router.push("/home/users/"+event);
    const usersFilter = users.filter(item => item.id != event);
    setUsers(usersFilter);
  }

  async function reloadUsers(event){
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

    dataUsers.map(item =>{
      let newItem = {
        id:item.id,
        username:item.username,
        email:item.email,
        name:item.name.firstname,
        lastname:item.name.lastname,
      }
      filterData.push(newItem);
    })

    setUsers(filterData);
  }

  function orderByColum(column){
    let copyData = [...users]
    console.log("como llego ",users);
    console.log("como llego copyData",copyData);

    // 
    let ordenado = copyData.sort((a,b)=>b.id-a.id)
    console.log("modificado ordenado",ordenado);
    setUsers([...ordenado]);
    console.log("modificado dataTable",users);
  }
  
  return (
    <div>
        <Table title={'Users'} data={users} columns={columns} actions={actions} add={openAddUser} show={openShowUser} deleteI={deleteUser} reload={reloadUsers} orderByColum={orderByColum}></Table>
    </div>
  )
}

export default Users