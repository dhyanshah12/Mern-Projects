import React, { useState } from 'react'
import { useForm } from 'react-hook-form'

export const FormSteper = () => {

    const{register,handleSubmit,formState:{errors},trigger} = useForm()
    const [step,setStep] = useState(1)

    const submitHandler =(data)=>{
        alert("For Submitted")
        console.log(data);
        
    }
    const validateSchema = {
        nameValidator : {
            required : {
                value : true,
                message : "Name is required**"
            }
        },
        emailValidator : {
            required : {
                value : true,
                message : "Email is required**"
            }
        },
        ageValidator : {
            required : {
                value : true,
                message : "Age is required**"
            }
        }
    }

    const next =async()=>{
        const valid = step==1 ? await trigger(["name","age"]):await trigger("email")
        if(valid)
        {
            setStep(step+1)
        }
    }
  return (
    <div style={{textAlign : "center"}}>
        <h1>FormSteper</h1>
        <form onSubmit={handleSubmit(submitHandler)}>
            {step==1 && (
                <div>
            <div>
                <label>Name : </label>
                <input type="text"{...register("name",validateSchema.nameValidator)}></input>
                {errors.name?.message}
            </div>
            <div>
                <button onClick={next}>Next</button>
            </div>
            </div>
            )}
           { 
                step==2 &&<div>
            <div>
                <label>Email : </label>
                <input type="text"{...register("email",validateSchema.emailValidator)}></input>
                {errors.email?.message}
            </div>
            <div>
                <button onClick={()=>{setStep(step-1)}}>Back</button>
                <input type='submit'></input>
            </div>
            </div>
            }
        </form>
    </div>
  )
}
