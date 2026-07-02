import React, { useEffect, useRef, useState } from 'react'

export const UseRefTask1 = () => {

   const[message,setmessage] = useState(["Hi","Hello","Fine"])

  const newmsg = useRef()

  useEffect(()=>{
        newmsg.current.style.color = "red"
  },[message])
   const addmsg=()=>{
        const msg = "Shiv"
        setmessage([...message,msg])
   }
    
  return (
    <div style={{textAlign : "center"}}>
        <h1>UseRefTask1</h1>
        {
              message.map((m,index)=>
            {
            return <li ref={index == message.length - 1 ? newmsg : null}style={{color: index == message.length - 1 ? "red" : "black"}}>{m}</li>
            })
        }
        <button onClick={addmsg}>Add</button>
    </div>
  )
}


// import React, { useEffect, useRef, useState } from 'react'

// export const UseRefTask1 = () => {

//   const [message, setMessage] = useState(["Hi", "Hello", "Fine"])

//   const inputRef = useRef()
//   const lastMsgRef = useRef()

//   useEffect(() => {
//     lastMsgRef.current?.style.setProperty("color", "red")
//   }, [message])

//   const addmsg = () => {
//     setMessage([...message, inputRef.current?.value || ""])
//     inputRef.current.value = ""
//   }

//   return (
//     <div style={{ textAlign: "center" }}>
//       <h1>UseRef Task1</h1>

//       <input type="text" ref={inputRef} />

//       {message.map((m, index) => (
//         <li
//           key={index}
//           ref={index === message.length - 1 ? lastMsgRef : null}
//           style={{
//             color: index === message.length - 1 ? "red" : "black"
//           }}
//         >
//           {m}
//         </li>
//       ))}

//       <button onClick={addmsg}>Add</button>
//     </div>
//   )
// }

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