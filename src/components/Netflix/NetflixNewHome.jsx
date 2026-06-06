import React from 'react'
import { MyButton } from './MyButton'

export const NetflixNewHome = () => {

  const homeTest = (x)=>{
    alert("home test "+x)
  }
  return (
    <div style={{textAlign : "center"}}>
        <h1>NetflixNewHome</h1>   
        <MyButton funName = {()=>{homeTest(100)}} name = "home Button"></MyButton> 
    </div>
  )
}
