import React from 'react'
import { Link } from 'react-router-dom';

export const Sports = () => {

    const sp = [
    { id: 1, name: "Cricket" },
    { id: 2, name: "Football" },
    { id: 3, name: "Basketball" },
    { id: 4, name: "Tennis" },
    { id: 5, name: "Hockey" }
];
    
  return (
    <div style={{textAlign:"center"}}>
        <h1>Sports</h1>
        {
            sp.map((s)=>{
                return <li>
                    <Link to = {`/sportsdetails/${s.id}`}>{s.name}</Link>
                </li>
            })
        }
    </div>
  )
}
