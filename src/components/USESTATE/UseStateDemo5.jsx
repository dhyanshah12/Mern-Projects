import React, { useState } from 'react'

export const UseStateDemo5 = () => {

    const [showPercentage, setShowPercentage] = useState(false)

    const [students, setStudents] = useState([
        { id: 1, name: "Dhyan", marks: 95, grade: "A+" },
        { id: 2, name: "Vishal", marks: 82, grade: "A" },
        { id: 3, name: "Ram", marks: 67, grade: "B" },
        { id: 4, name: "Shyam", marks: 45, grade: "C" },
        { id: 5, name: "Mohan", marks: 20, grade: "F" }
    ])

    const calc = () => {
        setShowPercentage(true)
    }

    return (
        <div style={{ textAlign: "center" }}>

            <h1>Student Result</h1>

            <table border={5} align='center' cellPadding={10}>

                <thead>
                    <tr>
                        <td>ID</td>
                        <td>NAME</td>
                        <td>MARKS</td>
                        <td>GRADE</td>

                        {
                            showPercentage && <td>PERCENTAGE</td>
                        }
                    </tr>
                </thead>

                <tbody>

                    {
                        students.map((s) => {
                            return (
                                <tr>
                                    <td>{s.id}</td>
                                    <td>{s.name}</td>
                                    <td>{s.marks}</td>
                                    <td>{s.grade}</td>
                                    {
                                        showPercentage &&
                                        <td>{s.marks}%</td>
                                    }

                                </tr>
                            )   
                        })
                    }

                </tbody>

            </table>

            <br />

            <button onClick={calc}>
                RESULT
            </button>

        </div>
    )
}   