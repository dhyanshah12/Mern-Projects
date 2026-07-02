import React from 'react'
import { useForm } from 'react-hook-form'

export const FormTask1 = () => {

    const  {register,handleSubmit,formState:{errors}}=useForm()

    const submitHandler = (data)=>{
        alert("form submitted")
        console.log(data);
        
    }
    const validateSchema = {
        hobbiesValidator : {
            required:{
            value : true,
            message : "max two selction required**"
            },validate : (params)=>{
                return params.length>=2 || "pls select  min two option*"
            }
        } 
    }
  return (
    <div style={{textAlign : "center"}}>
        <h1>FormTask1</h1>
        <form onSubmit={handleSubmit(submitHandler)}>
            <div>
                <label>Hobbies</label>
            Sports <input type='checkbox' value="Sports" {...register("hobbies",validateSchema.hobbiesValidator)}  /><br></br>
            Singing<input type='checkbox' value="Singing"{...register("hobbies",validateSchema.hobbiesValidator)}  /><br></br>
            Reading <input type='checkbox' value="reading"{...register("hobbies",validateSchema.hobbiesValidator)}/><br></br>
            Playing <input type='checkbox' value = "Playing "{...register("hobbies",validateSchema.hobbiesValidator)}  /><br></br>
                {errors.hobbies?.message}
            </div>
            <div>
                <input type='submit'></input>
                
            </div>
        </form>
    </div>
  )
}




