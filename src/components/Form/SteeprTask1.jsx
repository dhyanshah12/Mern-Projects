import React, { useState } from 'react'
import { useForm } from 'react-hook-form'

export const SteeprTask1 = () => {
    const { register, handleSubmit, formState: { errors }, trigger } = useForm()
    const [step, setStep] = useState(1)

    const submitHandler = (data) => {
        alert("Form Submitted")
        console.log(data);
    }
    const validateSchema = {
        idValidator: {
            required: {
                value: true,
                message: "id is required**"
            }
        },
        nameValidator: {
            required: {
                value: true,
                message: "name is required**"
            }
        },
        ageValidator: {
            required: {
                value: true,
                message: "age is required**"
            }
        },
        phoneValidator: {
            required: {
                value: true,
                message: "Phone number is required**"
            },
            minLength: {
                value: 8,
                message: "**Min len is 8**"
            },
            maxLength: {
                value: 10,
                message: "**Max len is 10**"
            }
        },
        emailValidator: {
            required: {
                value: true,
                message: "email is required**"
            }
        }
    }

    /* const next = async()=>{
        const valid = step==1 ? await trigger(["id","name"]):step == 2 ? await trigger("age"):await trigger("phone") 
        if(valid){
            setStep(step + 1)
        }
    }*/
    const next = async () => {
        let valid = false
        if (step == 1) {
            valid = await trigger(["id", "name"])
        } else if (step == 2) {
            valid = await trigger("age")
        } else if (step == 3) {
            valid = await trigger("phone")
        }
        if (valid) {
            setStep(step + 1)
        }
    }
    return (
        <div style={{ textAlign: "center" }}>
            <h1>SteeprTask1</h1>
            <form onSubmit={handleSubmit(submitHandler)}>
                {
                    step == 1 && (
                        <div>
                            <div>
                                <label>ID : </label>
                                <input type='text'{...register("id", validateSchema.idValidator)}></input>
                                {errors.id?.message}
                            </div>
                            <div>
                                <label>Name : </label>
                                <input type="text"{...register("name", validateSchema.nameValidator)}></input>
                                {errors.name?.message}
                            </div>
                            <div>
                                <button onClick={next}>Next</button>
                            </div>
                        </div>
                    )
                }
                {
                    step == 2 && (
                        <div>
                            <div>
                                <label>Age : </label>
                                <input type='number'{...register("age", validateSchema.ageValidator)}></input>
                                {errors.age?.message}
                            </div>
                            <div>
                                <button onClick={() => { setStep(step - 1) }}>Back</button>
                                <button onClick={next}>Next</button>
                            </div>
                        </div>
                    )
                }
                {
                    step == 3 && (
                        <div>
                            <div>
                                <label>Phone No :</label>
                                <input type='number'{...register("phone", validateSchema.phoneValidator)}></input>
                                {errors.phone?.message}
                            </div>
                            <div>
                                <button onClick={() => { setStep(step - 1) }}>Back</button>
                                <button onClick={next}>Next</button>
                            </div>
                        </div>
                    )
                }
                {
                    step == 4 && (
                        <div>
                            <div>
                                <label>Email : </label>
                                <input type='email'{...register("email", validateSchema.emailValidator)}></input>
                                {errors.email?.message}
                            </div>
                            <div>
                                <button onClick={() => { setStep(step - 1) }}>Back</button>
                                <input type='submit'></input>
                            </div>
                        </div>
                    )
                }
            </form>
        </div>
    )
}
