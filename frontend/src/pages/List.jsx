import React, { useEffect, useState } from 'react'
import { MDBListGroup, MDBListGroupItem } from 'mdb-react-ui-kit';
import axios from 'axios'
const List = () => {
  const [todo, setTodo] = useState([])
const getAllTodo =async() =>{
  try {
    const resp = await axios.get('http://localhost:8080/api/get-todo')
    setTodo(resp.data)
  } catch (error) {
    console.log(error);
  }
}
  useEffect(() => {
    getAllTodo()
  }, [])
  
  return (
    <>
    <MDBListGroup style={{ minWidthL: '22rem' }} light>
    {
todo && todo.map((data,key)=>(

    <MDBListGroupItem key={key}>{data.todo}</MDBListGroupItem>
))

    }
  </MDBListGroup>
    </>
  )
}

export default List