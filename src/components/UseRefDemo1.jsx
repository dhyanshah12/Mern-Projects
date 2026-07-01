import React, { useEffect, useRef } from 'react'

export const UseRefDemo1 = () => {

    const inputref = useRef()

    const focusInput=()=>{

        inputref.current.focus()
    }
    useEffect(()=>{

        focusInput()
    },[])
  return (
    <div style={{textAlign : "center"}}>
        <h1>UseRefDemo1</h1>
        <div>
            <label>Name : </label>
            <input ref={inputref} type='text'></input>
        </div>
    </div>
  )
}
