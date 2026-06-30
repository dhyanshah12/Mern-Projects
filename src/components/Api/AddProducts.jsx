import axios from 'axios'
import React from 'react'
import { useFieldArray, useForm } from 'react-hook-form'

export const AddProducts = () => {


    const { register, handleSubmit, control } = useForm({ defaultValues: { "products": [{ name: "", price: 0, description: "", color: [], size: "", isAvailable: true, unit: 0 }] } })
    const { fields, append, remove } = useFieldArray({ control, name: "products" })
    const submitHandler = async (data) => {
        const res = await axios.post(
            "https://node5.onrender.com/product/addproducts", data.products);
        console.log(res.data);
    }

    return (
        <div style={{ textAlign: "center" }}>
            <h1>AddProducts</h1>    
            <form onSubmit={handleSubmit(submitHandler)}>
                {
                    fields.map((p, index) => {
                        return <div key={p.id}>
                            <div>
                                <label>Name : </label>
                                <input type='text'{...register(`products.${index}.name`)}></input>
                            </div>
                            <div>
                                <label>Price : </label>
                                <input type='text'{...register(`products.${index}.price`)}></input>
                            </div>
                            <div>
                                <label>Description : </label>
                                <input type='text'{...register(`products.${index}.description`)}></input>
                            </div>

                            <label>Colors</label>
                            <input
                                type="checkbox" value="Red" {...register(`products.${index}.colors`)} /> Red <br></br>

                            <input
                                type="checkbox" value="Green" {...register(`products.${index}.colors`)} /> Green <br></br>

                            <input
                                type="checkbox" value="Blue" {...register(`products.${index}.colors`)} /> Blue <br></br>
                            <div>
                                <label>Size :</label>
                                <input type='text'{...register(`products.${index}.size`)}></input>
                            </div>
                            <div>
                                <label>IsAvailable :</label>
                                Active  <input type='radio' value="true"{...register(`products.${index}.isAvailable`)}></input>
                                Notactive<input type='radio' value="false"{...register(`products.${index}.isAvailable`)}></input>
                            </div>
                            <div>
                                <label>Unit</label>
                                <input type='text'{...register(`products.${index}.unit`)}></input>
                            </div>
                            <input type='submit'></input>
                        </div>
                    })
                }
            </form>
            <button onClick={() => { append([{ name: "", price: 0, description: "", colors: [], size: "", isAvailable: true, unit: 0 }]) }}>append</button>
        </div>
    )
}
