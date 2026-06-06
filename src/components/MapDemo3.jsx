import React from 'react'

export const MapDemo3 = () => {

     var users = [

        {id:1,name:"Dhyan",age:22},
        {id:2,name:"Vishal",age:25},
        {id:3,name:"Krish",age:20}
    ]
  return (
    <div style={{textAlign:"center"}}>
            <h1>MapDemo3</h1>
            <table class = "table table-dark">

                    <thead>
                            <tr>
                                <th>ID</th>
                                <th>NAME</th>
                                <th>AGE</th>
                            </tr>
                    </thead>
                    <tbody>
                        {
                            users.map((u)=>{
                                return (<tr>
                                    <td>{u.id}</td> 
                                    <td>{u.name}</td>
                                    <td>{u.age}</td> 
                                </tr>
                                );
                            })
                        }
                    </tbody>
            </table>
    </div>
  )
}
