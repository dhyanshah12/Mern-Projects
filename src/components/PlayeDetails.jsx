import React from 'react'
import { Link, useParams } from 'react-router-dom'

export const PlayeDetails = () => {

    const id = useParams().id
    const pd = [
        {id : 1 ,name : "Virat Kohli",nation : "India"},
        {id : 2 ,name : "Steve Smith",nation : "Australia"}
    ]
  return (
    <div style={{textAlign : "center"}}>
        <h1>PlayerDetails{id}</h1>
    </div>
  )
}
