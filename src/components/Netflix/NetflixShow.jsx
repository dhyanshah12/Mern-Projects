import React from 'react'
import { Link } from 'react-router-dom'
import { MyButton } from './MyButton'

export const NetflixShow = () => {

  const showTest = ()=>{
    alert("show Test")
  }
  const x = "friends"
  return (
    <div style={{textAlign : "center"}}>
        <h1>NetflixShow</h1>
        <li>
          <Link to = {`/watch/${x}`}>Friends</Link>
        </li>
        <li>
          <Link to = "/watch/Moneyheist">Money Heist</Link>
        </li>
        <li>
          <Link to = "/watch/Strangerthings">Stranger Things</Link>
        </li>
        <li>
          <Link to = "/watch/SapnevsEveryone">Sapne vs Everyone</Link>
        </li>

        <MyButton funName = {showTest} bgcolor = "gray"></MyButton>
    </div>
  )
}
