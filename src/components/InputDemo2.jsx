import React, { useState } from 'react'

export const InputDemo2 = () => {

    const [hobbies,setHobbies] = useState([])
    const HobbiesHandler = (event)=>{
        console.log(event.target.value);
        console.log("event...",event); 
         var checked = event.target.checked
         
         if(checked)
         {
            setHobbies([...hobbies,event.target.value])
         }else
         {
            const filterHobbies = hobbies.filter((h)=>{
                    return h!=event.target.value
            })
            setHobbies(filterHobbies)
         }
    }
  return (
    <div style={{textAlign : "center"}}>
        <h1>InputDemo2</h1>
        
        <div>
            <label>Hobbies</label><br /><br />
            Reading : <input type='checkbox' name='hobbies' value=  "reading"  onChange={(event)=>{HobbiesHandler(event)}}></input>
            travel : <input type='checkbox' name='hobbies' value=  "Travel"  onChange={(event)=>{HobbiesHandler(event)}}></input>
            Sports : <input type='checkbox' name='hobbies' value=  "sports"  onChange={(event)=>{HobbiesHandler(event)}}></input>
        </div>
        <h1>My Hobbies</h1>
        {
            hobbies.map((h)=>{
                return <li>{h}</li>
            })
        }
    </div>
  )
}