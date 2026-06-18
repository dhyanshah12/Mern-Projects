import axios from 'axios'
import React from 'react'
import { useForm } from 'react-hook-form'

export const ApiDemo22 = () => {

    const{register,handleSubmit} = useForm()

    const submitHandler = async(data)=>{
        
        const res = await axios.post("https://node5.onrender.com/user/user/",data)
        console.log(res);
        
        if(res.status==200){
            alert("user added")      
        }
    }
  return (
    <div style={{textAlign : "center"}}>
        <h1>ApiDemo22</h1>
        <form onSubmit={handleSubmit(submitHandler)}>
        <div>
            <label>Name</label>
            <input type='text'{...register("name")}></input>
        </div>
        <div>
            <label>AGE</label>
            <input type="text"{...register("age")}></input>
        </div>
        <div>
            <label>Email</label>
            <input type='text'{...register("email")}></input>
        </div>
        <div>
            <label>Password</label>
            <input type='text'{...register("password")}></input>
        </div>
        <div>
            <label>STATUS</label><br />
            active : <input type='radio' value='true'{...register("isActive")}></input><br />
            notActive : <input type='radio' value='false'{...register("isActive")}></input>
        </div>
        <div>
            <input type='submit'></input>
        </div>
        </form>
    </div>
  )
}
