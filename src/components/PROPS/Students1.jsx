import React, { useState } from 'react'
import { StudentList } from './StudentList'

export const Students1 = () => {

    const[flag,setFlag] = useState(true)
    var name = "Dhyan"
    var age = 21
    var Stuobject = {

        id : 1,name:"Shah",rollno:20
    }
     var subjcets = ["Maths","science","Eng","Phy"]

     const stopLoad= ()=>{
        setFlag(false)
     }

     const [sales,setSales] = useState(100)
  return (
    <div style={{textAlign : "center"}}>
        <h1>Students1</h1>
        <h1>Flag In Parent={flag == true ? "Loading..":"Not Loading..."}</h1>
        <StudentList sales = {sales} setSales = {setSales}  flag = {flag} stopLoad = {stopLoad} name = {name} age = {age} stu = {Stuobject} subjcets = {subjcets}></StudentList>

    </div>
  )
}
