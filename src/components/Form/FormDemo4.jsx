import React from 'react'
import { useForm } from 'react-hook-form'

export const FormDemo4 = () => {

    const {register,handleSubmit,formState:{errors}} = useForm()
    const refcodeLists = ["insta","facebook","google"]

    const submitHandler = (data)=>{
        alert("form Submitted")
        console.log(data);     
    }

    const validateSchema = {
        refcodeValidator : {
            required :{

            value : true,
            message : "ref code is required"
            },
            validate : (params)=>{
                // console.log("params",params);
                // return params == "insta" || "ref code is not valid*"
                return refcodeLists.includes(params) || "invalid ref code**"
            }
        }
    }
  return (
    <div style={{textAlign : "center"}}>
        <h1>FormDemo4</h1>
        <form onSubmit={handleSubmit(submitHandler)}>
           <div>
            <label>REF CODE</label>
            <input type="text"{...register("refcode",validateSchema.refcodeValidator)}></input>
            {errors.refcode?.message}
           </div>
           <div>
            <input type='submit'></input>
           </div>
        </form>
    </div>
  )
}

