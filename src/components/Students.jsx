import React from 'react'
import { Link } from 'react-router-dom'

export const Students = () => {

    const std = [
        { id: 1, name: "Ram", age: 21 },
        { id: 2, name: "Shyam", age: 22 },
        { id: 3, name: "Vyaam", age: 23 },
    ]

    return (
        <div style={{ textAlign: "center" }}>
            <h1>Students</h1>

            <table border={2} align='center' cellPadding="10" class = "table table-dark">
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>NAME</th>
                        <th>AGE</th>
                        <th>Action</th>
                    </tr>
                </thead>

                <tbody>
                    {
                        std.map((s) => (
                            <tr key={s.id}>
                                <td>{s.id}</td>
                                <td>{s.name}</td>
                                <td>{s.age}</td>
                                <td>
                                    <Link to={`/student/${s.id}`}>Result</Link>
                                </td>
                            </tr>
                        ))
                    }
                </tbody>
            </table>
        </div>
    )
}