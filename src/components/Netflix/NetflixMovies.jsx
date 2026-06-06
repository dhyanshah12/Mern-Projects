import React from 'react'
import { Link } from 'react-router-dom'
import { MyButton } from './MyButton'

export const NetflixMovies = () => {

    const movielist = [
        {id : 1,name : "Dhurandhar"},
        {id : 2,name : "Pushpa"},
        {id : 3,name : "Mangal Pandey"}
    ]
  return (
    <div style={{textAlign : "center"}}>
        <h1>NetflixMovies</h1>
        {
            movielist.map((movie)=>{
                return <li>
                    <Link to={`/watch/${movie.name}`}>{movie.name}</Link>
                </li>
            })
        }
        <MyButton name = "Movies" ></MyButton>
    </div>
    
  )
}
