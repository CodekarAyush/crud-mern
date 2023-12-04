import React, { useState } from "react";
import { MDBInput } from 'mdb-react-ui-kit';
import axios from 'axios'
import { Spinner,useToast } from '@chakra-ui/react'
const InputForm = () => {
    const [todo, setTodo] = useState('')
    const [loader, setLoader] = useState(false)
    const toast = useToast()
    const submitTodo= async()=>{

  setLoader(true)
  try {
    const resp = await axios.post('http://localhost:8080/api/post-todo',{
      todo:todo
    })
    
    toast({
      title: resp.data.message,
      description: "We've created your account for you.",
      status: 'success',
      duration: 4000,
      isClosable: true,
    })
    setLoader(false)
    console.log(resp);
  } catch (error) {
    console.log(error);
    toast({
      title: error.data.message,
      description: "We've created your account for you.",
      status: 'error',
      duration: 4000,
      isClosable: true,
    })
    setLoader(false)
  }
}
    return (
    <div className="container my-4">
      <div className="row ">
      <div className="col-8">
        
      <MDBInput onChange={e=>setTodo(e.target.value)} value={todo}  label='Enter todo...' id='form1' type='text' />
      </div>
      <div className=" col-4 d-flex justify-content-center">
      <button  onClick={submitTodo} className="btn btn-primary">{loader? <Spinner/>: 'Submit'}</button>
        
      </div>
      </div>
    </div>
  );
};

export default InputForm;
