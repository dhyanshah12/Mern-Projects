import React from 'react'

export const StudentList = (props) => {

    console.log("StudentsList...",props);
    
  return (
    <div>
        <h1>StudentList</h1>
        <h1>Name : {props.name}</h1>
        <h1>Age = {props.age}</h1>
        <h1>Student Name = {props.stu.name}</h1>
        <h1>Flag In Child = {props.flag == true ? "Loading":"Not Loading"}</h1>
        <button onClick={props.stopLoad}>Stop Load</button>
        <h1>{props.sales}</h1>
        <button onClick={()=>{props.setSales(200)}}>change</button>
       {props.subjcets.map((s)=>{
          return <li>{s}</li>
        })}
    </div>
  )
}
