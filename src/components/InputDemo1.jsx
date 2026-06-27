import React, { useState } from 'react'

export const InputDemo1 = () => {

    const [name,setName] = useState("")
    const [age,setAge] = useState("")
    const [gender,setGender] = useState("")
    const [isClicked,setisClicked] = useState(false)
    const [color,setColor] = useState("black")
    const nameHandler= ()=>{
        console.log(event.target.value);
        setName(event.target.value)
    }
    const ageHandler = (event)=>{
        setAge(event.target.value)
    }  
    
    const clickHandler = () =>{
        setisClicked(true)
    }
    
    const colorHandler = (event)=>{
        setColor(event.target.value)
    }

   const genderHandler = (event)=>{
        setGender(event.target.value)
   }
  return (
    <div style={{textAlign : "center"}}>
    <div >
        <h1>InputDemo1</h1>
        <label>Name : </label>
        <input type='text' onChange={(event)=>{nameHandler(event)}}></input>
        {/* {name} */}
    </div>
        
        <div >
            <label>Age = </label>
            <input type="number" onChange={(event)=>{ageHandler(event)}}></input>
        </div>

         <div>
            <label>Gender : 

                <label> Male</label>
                <input type='radio'onChange={(event)=>{genderHandler(event)}} name='gender' value="Male"></input>
                            <br />

                 <label htmlFor=""> Female</label>
                 <input type='radio' onChange={(event)=>{genderHandler(event)}} name='gender' value="Female"></input>
                
            </label>
           
        </div>
     <div>
            <label>COLOR</label>
            <input type='color' onChange={(event)=>{colorHandler(event)}}></input>
        </div>
    <div>
        
        <button onClick={()=>{clickHandler()}}>Click</button>
    </div>
        <div>
            {
                isClicked == true &&  <div style={{color : color}}>
                    <h1>Output</h1>
                    <h1>Name ={name}</h1>
                    <h1>Age = {age}</h1>
                    <h1>Gender : {gender}</h1>
                </div>
            }
        </div>

        
    </div>
  )
}
