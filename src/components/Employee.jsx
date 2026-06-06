import React, { useState } from 'react'

export const Employee = () => {

    const [emp, setEmp] = useState([

        { id: 1, name: "Ram", age: 21, salary: 25000 },
        { id: 2, name: "Shyam", age: 22, salary: 35000 },
        { id: 3, name: "Om", age: 23, salary: 50000 },
        { id: 4, name: "Sahil", age: 24, salary: 75000 },
        { id: 5, name: "Vishal", age: 25, salary: 95000 }
    ])

    const deletEmp = (id) => {

        const newEmployee = emp.filter((e) => e.id !== id)
        setEmp(newEmployee)
    }
    return (
        <div style={{ textAlign: "center" }}>
            <h1>Employee</h1>
            {
                emp.length == 0 ? <h1 style={{ textAlign: "center" }}>NO Employee Found</h1>
                    :
                    <table border={5} align='center' class="table table-dark">
                        <thead>
                            <tr>
                                <td>ID</td>
                                <td>NAME</td>
                                <td>AGE</td>
                                <td>SALARY</td>
                                <td>ACTION</td>
                            </tr>
                        </thead>
                        {
                            emp.map((e) => {
                                return <tr key={e.id}>
                                    <td>{e.id}</td>
                                    <td>{e.name}</td>
                                    <td>{e.age}</td>
                                    <td>{e.salary}</td>

                                    <td>
                                        <button onClick={() => {deletEmp(e.id) }}>DELETE</button>
                                    </td>
                                </tr>
                            })
                        }
                        <tbody>
                        </tbody>
                    </table>
            }       

            
        </div>
    )
}
