import axios from 'axios'
import React from 'react'
import { Link, useParams } from 'react-router-dom'

export const ApiTask1 = () => {
    const id = useParams().id

    const SearchMovie = async()=>{

            const res = await axios.get(`http://www.omdbapi.com/?apikey=d45f3b1&i=${id}`)
            console.log(res.data);
    }
  return (
    <div style={{textAlign : "center"}}>
        <h1>ApiTask1</h1>
        <h1>Movie Id = {id}</h1>
        <button onClick={SearchMovie}>Get Data</button>
    </div>
  )
}
