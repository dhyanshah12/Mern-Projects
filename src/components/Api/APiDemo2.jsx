import axios from 'axios';
import React from 'react'

export const APiDemo2 = () => {

    const adddUser = async()=>{

        const userObj = {
    name: "amit",
      age: 23,
      email: "dhyan12@gmail.com",
      password: "amit123",
      isActive: true,
    };

    const res = await axios.post("https://node5.onrender.com/user/user/",userObj);

    console.log(res);
    console.log(res.data);
        
    }
  return (
    <div style={{textAlign : "center"}}>
        <h1>APiDemo2</h1>
        <button onClick={adddUser}>ADD</button>
    </div>
  )
}
