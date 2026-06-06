import React from 'react'

export const MapDemo2 = () => {

    var users = [

        {id:1,name:"Dhyan",age:22},
        {id:2,name:"Vishal",age:25},
        {id:3,name:"Krish",age:20}
    ]
  return (
    <div style={{textAlign : "center"}}>
        <h1>MapDemo2</h1>
        {
            users.map ((user)=>{
                return <li>{user.id} {user.name} {user.age}</li>
            })
        }
        </div>
  )
}
