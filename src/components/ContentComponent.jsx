import React from 'react'

export const ContentComponent = () => {

    const name = "Dhyan"
    const age = 21
    const isSecular = true
  return (
    <div style={{border:"1px solid black",minHeight:"30px",width:"100%",textAlign:"center"}}>

        <h1>Name = {name}</h1>
        <h1>Age = {age}</h1>
        <h1>isSecular = {isSecular == true ? "Yes" : "No"}</h1>
    </div>

  )
}
