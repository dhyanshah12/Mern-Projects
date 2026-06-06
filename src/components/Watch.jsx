import React from 'react'
import { useParams } from 'react-router-dom'

export const Watch = () => {

    ////fetch data from url then Use useParams
    const name = useParams().name
  return (
    <div style={{textAlign : "center"}}>
        <h1>Watching !! {name}</h1>
    </div>
  )
}
