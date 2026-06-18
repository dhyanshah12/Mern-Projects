import React from 'react'
import { useFieldArray, useForm } from 'react-hook-form'

export const FormDemo5 = () => {

    const{register,handleSubmit,control} = useForm({defaultValues:{medicine:[{name:"",dosage:0,freq:0}]}})

    const{append,remove,fields}=useFieldArray({control,name:"medicine"})

    const submitHandler = (data)=>{
        console.log(data);
        alert("Form Submitted")
    }
  return (
    <div style={{textAlign:"center"}}>
      <h1>FormDemo5</h1>
      <form onSubmit={handleSubmit(submitHandler)}>
        {
            fields.map((f,index)=>{
                return <div key={f.id}>
                    <div>
                        <label>Name</label>
                        <input type='text'{...register(`medicine.${index}.name`)}></input>
                    </div>
                    <div>
                        <label>Dosage</label>
                        <input type='text'{...register(`medicine.${index}.dosage`)}></input>
                    </div>

                    <div>
                        <label>Freq</label>
                        <input type='text'{...register(`medicine.${index}.freq`)}></input>
                    </div>

                    <div>
                        <button type='button' onClick={()=>remove(index)}>Remove</button>
                    </div>
                </div>
            })
        }
        <div>
            <input type='submit'></input>
        </div>
      </form>
       <button onClick={()=>{append([{name:"",dosage:0,freq:0}])}}>append</button>
    </div>
  )
}
