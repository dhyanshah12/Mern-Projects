import React from 'react'
import { useForm } from 'react-hook-form'

export const FormDemo3 = () => {

    const {register,handleSubmit,formState : {errors}} = useForm()

     console.log("error",errors);

     const submitHandler = (data)=>{
        alert("Form Submited")
        console.log("data",data);
     }

     const validationSchema = {

            emailValidator : {
                required : {
                    value : true,
                    message : "email is required**"
                },
                minLength : {
                    value : 6,
                    message : "min len is 6"
                },
                maxLength : {
                    value : 30,
                    message : "max len is 30"
                }
            },
            ageValidator : {
                required : {
                    value : true,
                    message : "Age is Required**"
                },
                min : {
                    value : 18,
                    message : "min age is 18"
                },
                max : {
                    value : 70,
                    message : "max age is 70"
                }
            },
                hobbiesValidator : {
                    required : {
                        value : true,
                        message : "Select Any Hobbies**"
                    }
                },

                genderValidator : {
                    required : {
                        value : true,
                        message : "Select Any Gender**"
                    }
                },

                countryValidator : {
                    required : {
                        value : true,
                        message : "Select any country**"
                    }
                }
            
     }
  return (
    <div style={{textAlign : "center"}}>
        <h1>FormDemo3</h1>
       <form onSubmit={handleSubmit(submitHandler)}>

            <div>
                <label htmlFor="">Name : </label>
                <input type="text"{...register("name",{required :{value :true ,message : "name is required**"}})}></input>
                {errors.name && errors.name.message}
            </div>

                <div>
                    <label>Email:</label>
                    <input type='text'{...register("email",validationSchema.emailValidator)}></input>
                    {errors.email?.message}
                </div>

                <div>
                    <labe>Age:</labe>
                    <input type="text"{...register("age",validationSchema.ageValidator)}></input>
                    {errors.age && errors.age.message}
                </div>

                <div>
                    <label>Gender</label><br />
                    Male : <input type='radio' value="male"{...register("gender",validationSchema.genderValidator)}></input>
                    Female :<input type='radio' value="female"{...register("gender",validationSchema.genderValidator)}></input><br />
                    {errors.gender?.message}
                </div><br />
                 <div>
                <label ><u>Hobbies</u></label> <br />
            Sports <input type='checkbox' value="Sports" {...register("hobbies",validationSchema.hobbiesValidator)}  /><br></br>
            Singing<input type='checkbox' value="Singing"{...register("hobbies",validationSchema.hobbiesValidator)}  /><br></br>
            Reading <input type='checkbox' value="reading"{...register("hobbies",validationSchema.hobbiesValidator)}/><br></br>
            Playing <input type='checkbox' value = "Playing "{...register("hobbies",validationSchema.hobbiesValidator)}  /><br></br>
            {errors.hobbies && errors.hobbies.message}
            </div><br></br>

            <div>
                <label>Country</label>
                <select {...register("country",validationSchema.countryValidator)}>
                    <option value="">select</option>
                    <option value="india">India</option>
                    <option value="usa">Usa</option>
                    <option value="canada">Canada</option>
                </select>
                {errors.country?.message}
            </div>
            <div>
                <input type='submit'></input>
            </div>
       </form>
    </div>
  )
}
