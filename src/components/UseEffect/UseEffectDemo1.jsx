import React, { useEffect, useState } from 'react'

export const UseEffectDemo1 = () => {

    const [count,setCount]= useState(0)
    useEffect(()=>{
            console.log(count);
    },[count])
  return (
    <div style={{textAlign : "center"}}>
        <h1>UseEffectDemo1</h1>
        {count}
        <button onClick={()=>setCount(count+1)}>Count</button>
    </div>
  )
}
