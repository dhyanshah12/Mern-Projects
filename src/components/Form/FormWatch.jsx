import React from 'react'
import { useForm } from 'react-hook-form'

export const FormWatch = () => {

    const{register,handleSubmit,formState:{errors},watch} = useForm({mode : "onChange"})

    const submitHandler = (data)=>{
        alert("Form Submitted")
        console.log(data);   
    }

       const password = watch("password")
    const validateSchema = {
            passwordValidator : {
                required : {
                value : true,
                message :  "password is required**"
                }
            },
     confirmPasswordValidator: {
    validate: (params) => {
        return password === params || "both password should match**"
    }
}
    }
  return (
    <div style={{textAlign : "center"}}>
        <h1>FormWatch</h1>
        <form onSubmit = {handleSubmit(submitHandler)}>
        <div>
            <label>Password : </label>
            <input type="text"{...register("password",validateSchema.passwordValidator)}></input>
            {errors.password?.message}
        </div>

        <div>
            <label>ConfirmPassword : </label>
            <input type="text"{...register("confirmpassword",validateSchema.confirmPasswordValidator)}></input>
            {errors.confirmpassword?.message}
        </div>
        <div>
            <input type='submit'></input>
        </div>
        </form>
    </div>
  )
}

