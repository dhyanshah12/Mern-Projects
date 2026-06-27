import axios from 'axios'
import React, { useEffect, useState } from 'react'

export const Item = () => {

    //get data from localstorage
    const [message,setMessage] = useState([])
    const get = async()=>{

        
         const res = await axios.get(`https://node5.onrender.com/item`,{
      headers:{
             "Authorization":`Bearer ${localStorage.getItem("token")}`
      }
    })
    
    console.log(res.data);
    setMessage(res.data.data)
    }
    useEffect(()=>{
            get()
    },[])
  return (
    <div style={{textAlign : "center"}}>
        <h1>Item</h1>
        <table className='table table-dark'>
            <thead>
            <tr>
                <th>ID</th>
                <th>NAME</th>
                <th>PRICE</th>
                <th>COLOR</th>
                <th>STATUS</th>
                <th>STOCK</th>
            </tr>
            </thead>
            <tbody>
                {message.map((i)=>{
                    return <tr>
                        <td>{i._id}</td>
                        <td>{i.name}</td>
                        <td>{i.price}</td>
                        <td>{i.color}</td>
                        <td>{i.status  ?  "True" : "false"}</td>
                        <td>{i.stock}</td>
                    </tr>
                })}
            </tbody>
        </table>
       
    </div>
  )
}
