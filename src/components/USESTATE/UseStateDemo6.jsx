import React, { useState } from 'react'

export const UseStateDemo6 = () => {

    const [ShowOne, setShowOne] = useState(false)
    const [ShowAll, setShowAll] = useState(false)
    const pld = [

        { id: 1, name: "Virat Kohli", Country: "India", Info: " The Pied Piper Of Cricket " },
        { id: 2, name: "Ms Dhoni", Country: "India", Info: " Luck By Chance " }
    ]

    const showSingleInfo = () => {
        setShowOne(true)
        setShowAll(false)
    }

    const showAllInfo = () => {
        setShowOne(false)
        setShowAll(true)
    }
    return (
        <div style={{ textAlign: "center" }}>
            <h1>UseStateDemo6</h1>
            <table border={1} align='center' class="table table-dark" cellPadding={10} style={{ width: "70%" }}>
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>NAME</th>
                        <th>COUNTRY</th>
                        {
                            (ShowOne || ShowAll) && <th>Defined</th>
                        }
                    </tr>
                </thead>

                <tbody>
                    {
                        pld.map((p, index) => {
                            return (
                                <tr>

                                    <td>{p.id}</td>
                                    <td>{p.name}</td>
                                    <td>{p.Country}</td>

                                    {
                                        (ShowOne || ShowAll) &&
                                        <td>
                                            {
                                                ShowOne
                                                    ? (index === 0 ? p.Info : "----")
                                                    : p.Info
                                            }
                                        </td>
                                    }

                                </tr>
                            )
                        })
                    }
                </tbody>
            </table>
            <button onClick={showSingleInfo} style={{
                padding: "10px 20px", 
                fontSize: "16px", 
                cursor: "pointer"
                }}>Click</button>

            <button onDoubleClick={showAllInfo} style={{
                padding: "10px 20px",
                fontSize: "16px",
                cursor: "pointer"
            }}>DBClick</button>
        </div>
    )
}
