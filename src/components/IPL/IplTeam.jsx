import React from 'react'
import { Link } from 'react-router-dom'

export const IplTeam = () => {

    const teamlist = [
        {id:1,name:"RCB"},
        {id:2,name:"PBKS"},
        {id:3,name:"RR"},
        {id:4,name:"SRH"},
        {id:5,name:"MI"},
        {id:6,name:"GT"},
        {id:7,name:"KKR"},
        {id:8,name:"LSG"},
        {id:9,name:"CSK"},
        {id:10,name:"DC"}
    ]
  return (
    <div style={{textAlign : "center"}}>
        <h1>IplTeam</h1>
        {
            teamlist.map((tl)=>{
                return <li>
                    <Link to = {`/teamdetails/${tl.id}`}>{tl.name}</Link>
                </li>
            })
        }
    </div>
  )
}
