import axios from 'axios'
import React from 'react'
import { useForm } from 'react-hook-form'
import { toast } from 'react-toastify'
import { Loader } from '../../../Loader'

export const ApiTask2 = () => {

      const{register,handleSubmit} = useForm()
    const submitHandler = async(data) => {

        const userObj = {
            "name": "t-shirt",
            "price": 599,
            "description": "okok",
            "colors": [
                "Red",
                "Green",
                "Yellow"
            ],
            "size": "m",
            "isAvailable": true,
            "unit": 10,
        }

        const res = await axios.post("https://node5.onrender.com/product/create",data)
        console.log(res);
        console.log(res.data);
        
        if(res.status==201  )
        {
            // alert("Submitted")
            toast.success("User added...")
        }
    }
    return (
        <div style={{ textAlign: "center" }}>
            <h1>ApiTask2</h1>
            {
                <Loader/>
            }
            <form onSubmit={handleSubmit(submitHandler)}>
                <div>
                    <label>Name</label>
                    <input type='text'{...register("name")}></input>
                </div>
                <div>
                    <label>Price</label>
                    <input type='text'{...register("price")}></input>
                </div>
                <div>
                    <label>Description</label>
                    <input type='text'{...register("description")}></input>
                </div>
                <div>
                    <label>Size</label>
                    <input type='text'{...register("size")}></input>
                </div>

                <div>
                    <label>Colors</label><br />
                    Red<input type='checkbox' value="Red"{...register("colors")}></input><br />
                    Green<input type='checkbox' value="Green"{...register("colors")}></input><br /> 
                    Yellow<input type='checkbox' value="Yellow"{...register("colors")}></input>
                </div>
                <div>
                    <label>Status</label><br />
                    Active<input type='radio' value="true"{...register("isAvailable")}></input>
                    NotActive<input type='radio' value="false"{...register("isAvailable")}></input>
                    
                </div>
                <div>
                    <label>Unit</label>
                    <input type='text'{...register("unit")}></input>
                </div>
                <div>
                    <input type='submit'></input>
                </div>
            </form>
        </div>
    )
}
