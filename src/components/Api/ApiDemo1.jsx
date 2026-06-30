import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Modal } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import { toast } from 'react-toastify'

export const ApiDemo1 = () => {

    const[message,setMessage] =useState("")
    const[users,setUsers] =  useState([])
     const [isLoading, setisLoading] = useState(false);
  const [show, setshow] = useState(false)
  const [singleUser, setsingleUser] = useState({})
    const getUserDetail =async(id)=>{
    //api...
    const res = await axios.get(`https://node5.onrender.com/user/user/${id}`)
   
    console.log("res..",res)
    //res.data --->api response
    //res.data.data -->object ..
    setsingleUser(res.data.data)
    setshow(true)
  }
    const getUser=async()=>{

            const res =await axios.get("https://node5.onrender.com/user/user/")
            console.log(res);
            console.log(res.data);
            console.log(res.data.message);
            console.log(res.data.data);
            setMessage(res.data.message);
            setUsers(res.data.data)
    }
     const handleClose =()=>{
    setshow(false)
  }
  useEffect(()=>{
    getUser()
  })
     const deleteUser = async(id) => {
    
    const res = await axios.delete(`https://node5.onrender.com/user/user/${id}`)
    console.log(res) //axios object..
    if(res.status==204){
        toast.error("user deleted !!")
        getUser() //api
    }
  };
  return (
    <div style={{textAlign : "center"}}>
        <h1>Api Demo1</h1>
        {message}
        
        <table class ='table table-dark'>
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>NAME</th>
                        <th>AGE</th>
                        <th>EMAIL</th>
                        <th>IsActive</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        users.map((u)=>{
                            return <tr>
                                <td>{u._id}</td>
                                <td>{u.name}</td>
                                <td>{u.age}</td>
                                <td>{u.email}</td>
                                <td>
                                        {u.isActive ? "true":"false"}
                                </td>
                                <td>
                                    <button className="btn btn-danger" onClick={()=>{deleteUser(u._id)}}>Delete</button>
                                    <button className="btn btn-primary" onClick={()=>{getUserDetail(u._id)}}>Detail</button>
                                    <Link style={{marginLeft:"10px"}} className="btn btn-warning" to={`/updateuser/${u._id}`}>Update</Link>
                                </td>
                            </tr>
                        })
                    }
                </tbody>
        </table>
        <Modal show={show} onHide={handleClose}>
                     <Modal.Header>USER DETAIL</Modal.Header>
            <Modal.Body>
                <p>Name ={singleUser.name} </p>
                <p>AGe = {singleUser.age}</p>
                </Modal.Body>
        </Modal>
    </div>
  )
}
