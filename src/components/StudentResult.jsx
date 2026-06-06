import React from 'react'
import { useParams } from 'react-router-dom'

export const StudentResult = () => {

     const stur = [

        {
            id: 1,
            name: "Ram",
            Subjects: [
                { name: "Maths", marks: 95 },
                { name: "English", marks: 75 }
            ]
        },

        {
            id: 2,
            name: "Shyam",
            Subjects: [
                { name: "Science", marks: 90 },
                { name: "Maths", marks: 85 }
            ]
        },

        {
            id: 3,
            name: "Rom",
            Subjects: [
                { name: "English", marks: 100 },
                { name: "SS", marks: 99 }
            ]
        },
    ]

    const  id  = useParams().id

    const foundstu = stur.find((s) => s.id == id)

    const totalmarks = foundstu.Subjects.reduce((sum,sub)=>{
        return  sum + sub.marks
    },0) 
   
    const percentage = totalmarks / foundstu.Subjects.length
    let grade = ""
 
    if (percentage > 95)
        grade = "A+"
    else if(percentage > 90)
        grade = "B"
    else 
        grade = "C"
    

    return (
        <div style={{ textAlign: "center" }}>
            <h1>Result</h1>
            <h2>Student Name = {foundstu.name}</h2>

            <table border="5" align="center" cellPadding="10" >
                <thead>
                    <tr>
                        <th>Subject</th>
                        <th>Marks</th>
                    </tr>
                </thead>

                <tbody>
                    {
                        foundstu.Subjects.map((sub) => (
                            <tr>
                                <td>{sub.name}</td>
                                <td>{sub.marks}</td>
                            </tr>
                        ))
                    }
                </tbody>
            </table>
            <h2>Total Marks = {totalmarks}</h2>
            <h2>Percentage = {percentage+"%"}</h2>
            <h2>Grade = {grade}</h2>
        </div>
    )
}