import React from 'react'
import { useParams } from 'react-router-dom'

export const Watch1 = () => {

    const id = useParams().id
  return (
    <div style={{textAlign:"center"}}>
        <h1>{id}</h1>
    </div>
  )
}
