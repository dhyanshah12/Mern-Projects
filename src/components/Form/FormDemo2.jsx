// import React, { useState } from 'react'
// import { useForm } from 'react-hook-form'

// export const FormDemo2 = () => {


  
//     const{register,handleSubmit}= useForm()

//     const submithandler=(data)=>{
//         console.log(data);
       
// }
//   return (
//     <div style={{textAlign : "center"}}>
//         <h1>FormDemo2</h1>
//         <form onSubmit={handleSubmit(submithandler)}>
//             <div>
//         <label htmlFor="">Country : </label>
//       <select name="countries" id="countries" {...register("countries")}>
//         <option value="">select</option>
//         <option value="India">India</option>
//         <option value="USA">USA</option>
//         <option value="Australia">Australia</option>
//       </select>
//             </div>
//             <div>
//         <label htmlFor="">Hobbies : </label> <br />
//         Chess : <input type="checkbox"  value="chess" {...register("hobbies")}/>
//       <br />
//       Cricket : <input type="checkbox"  value="cricket" {...register("hobbies")}/>
//       <br />
//       Reading : <input type="checkbox"  value="reading" {...register("hobbies")}/>
//       <br /> <br />
//             </div>
//             <div>
//                 <input type='Submit'></input>
//             </div>
//         </form>
//     </div>
//   )
// }

  import React from 'react'
import { useForm } from 'react-hook-form'

export const FormDemo2 = () => {
const {register,handleSubmit} = useForm()

        const submit = (data)=>{
            console.log(data)
        }
  return (
    <div>
        <h1>FormDemo2</h1>
        <form onSubmit={handleSubmit(submit)}>
            <div>
                <label >Hobbies</label><br></br>
            Sports <input type='checkbox' value="Sports" {...register("hobbies")}  /><br></br>
            Singing<input type='checkbox' value="Singing"{...register("hobbies")}  /><br></br>
            Reading <input type='checkbox' value="reading"{...register("hobbies")}/><br></br>
            Playing <input type='checkbox' value = "Playing "{...register("hobbies")}  /><br></br>
            </div><br></br>
            <div>
                <label>Country</label>
                <select {...register("country")}>
                    <option value="usa">USA</option>
                    <option value="canada">Canada</option>
                    <option value="uk">UK</option>
                </select>
            </div>
             <div>
                <input type='submit'></input>
            </div>

        </form>


    </div>
  )
}