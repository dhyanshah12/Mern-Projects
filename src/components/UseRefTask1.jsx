// STATIC-HARDCODED

import React, { useState } from 'react'

export const UseRefTask1 = () => {

    const [message, setMessage] = useState(["hi", "hello", "fine"])

    const msg = () => {
        setMessage([...message, "Shiv"])
    }

    return (
        <div style={{ textAlign: "center" }}>
            <h1>UseRefTask1</h1>

            {
                message.map((m, index) => (
                    <li key={index}>
                        <span
                            style={{
                                color: m === "Shiv" ? "red" : ""
                            }}
                        >
                            {m}
                        </span>
                    </li>
                ))
            }

            <button onClick={msg}>Message</button>
        </div>
    )
}

// --------------------------------------------------------------

// Dynamic//

// import React, { useEffect, useRef, useState } from 'react'

// export const UseRefTask1 = () => {

//     const [message, setMessage] = useState(["hi", "hello", "fine"])
//     const show = useRef()

//     const msg = () => {
//         const alpha = "abcdefghijklmnopqrstuvwxyz"
//         let name = ""

//         for (let i = 0; i < 5; i++) {
//             const randomIndex = Math.floor(Math.random() * alpha.length)
//             name += alpha[randomIndex]
//         }

//         setMessage([...message, name])
//     }

//     useEffect(() => {
//         if (show.current) {
//             show.current.style.color = "red"
//         }
//     }, [message])

//     return (
//         <div style={{ textAlign: "center" }}>
//             <h1>UseRefTask1</h1>

//             {
//                 message.map((m, index) => (
//                     <li
//                         key={index}
//                         ref={index === message.length - 1 ? show : null}>
//                         {m}
//                     </li>
//                 ))
//             }

//             <button onClick={msg}>Message</button>
//         </div>
//     )
// }