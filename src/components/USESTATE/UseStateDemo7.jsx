import React, { useState } from 'react'

export const UseStateDemo7 = () => {
         //Variable
    const [user, setUser] = useState(["Ram", "Shyam", "Smit"])
                //setter Fun

    const addName = () => 
        {
        const alpha = "abcdefghijklmnopqrstuvwxyz"
        var size = 5
        var name = ""

        for (let i = 0; i < size; i++) 
        {
            var randomindex = Math.floor(Math.random() * alpha.length)
            name = name + alpha[randomindex]
        }
        setUser([...user, name])
    }
    // setUser (["Ram","Shyam","Smit"])
    // var updatedUser = ([...user,"pqrs"])
    // var updatedUser = [...users,"abcd"]
    // setUser(updatedUser)
    //  setUser([...user,name])
    return (
        <div style={{ textAlign: "center" }}>
            <h1>UseStateDemo7</h1>
            {
                user.map((u) => {
                    return <li>{u}</li>
                })
            }
            <button onClick={addName}>Add</button>
        </div>
    )
}
