import React, { use, useState } from 'react'

export const UseStateDemo4 = () => {

    const [user,setUser] = useState({id : 1, name : "Dhyan"})

    const changeUser = () =>{
        setUser({id : 101 , name:"Ram"})
    }
  return (
    <div style={{textAlign : "center"}}>
        <h1>UseStateDemo4</h1>
        <h1>ID = {user.id}</h1>
        <h1>NAME = {user.name}</h1>
        <button onClick={()=>{changeUser()}}>CHANGE</button>
    </div>
  )
}
