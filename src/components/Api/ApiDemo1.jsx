import axios from 'axios'
import React, { useState } from 'react'

export const ApiDemo1 = () => {

    const[message,setMessage] =useState("")
    const[users,setUsers] =  useState([])
    const getUser=async()=>{

            const res =await axios.get("https://node5.onrender.com/user/user/")
            console.log(res);
            console.log(res.data);
            console.log(res.data.message);
            console.log(res.data.data);
            setMessage(res.data.message);
            setUsers(res.data.data)
    }
  return (
    <div style={{textAlign : "center"}}>
        <h1>Api Demo1</h1>
        {message}
        <button onClick={getUser}>Get</button>
        <table class ='table table-dark'>
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>NAME</th>
                        <th>AGE</th>
                        <th>EMAIL</th>
                        <th>IsActive</th>
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
                            </tr>
                        })
                    }
                </tbody>
        </table>
    </div>
  )
}
