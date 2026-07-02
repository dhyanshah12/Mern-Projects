import React, { useState } from 'react'
import { useForm } from 'react-hook-form'

export const FormDemo1 = () => {

    const [data, setData] = useState({})

    const { register, handleSubmit } = useForm()

    const submitHandler = (data) => {
        console.log(data)
        setData(data)
    }

    return (
        <div style={{ textAlign: "center" }}>
            <h1>FormDemo1</h1>

            <form onSubmit={handleSubmit(submitHandler)}>
                <div>
                    <label>Name : </label>
                    <input type="text" {...register("name")} />
                </div>

                <div>
                    <label>Age : </label>
                    <input type="text" {...register("Age")} />
                </div>

                <div>
                    <label>Gender</label>
                    <br />
                    Male :
                    <input
                        type="radio"
                        value="male"
                        {...register("gender")}
                    />
                    <br />
                    Female :
                    <input
                        type="radio"
                        value="female"
                        {...register("gender")}
                    />
                </div>

                <div>
                    <input type="submit" value="Submit" />
                </div>
            </form>

            

            <h2>Submitted Data</h2>
            <h3>Name = {data.name}</h3>
            <h3>Age = {data.Age}</h3>
            <h3>Gender = {data.gender}</h3>
            
        </div>
    )
}