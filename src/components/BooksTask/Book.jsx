import React, { useState } from 'react'
import { BookList } from './BookList'

export const Book = () => {

    const [book,setBook] = useState([

        { id: 1, name: "React JS" ,price : 2000},
        { id: 2, name: "Node JS" ,price : 3000},
        { id: 3, name: "Java", price : 4000},
        { id: 4, name: "Python", price : 5000 }
    ])

    const deleteBook = (id)=>{
        const newBook = book.filter((book)=>{
            return book.id!=id
        })
        setBook(newBook)
    }
  return (
    <div style={{textAlign : "center"}}>
        <h1>Book</h1>
        <BookList book = {book} deleteBook = {deleteBook}></BookList>
        
    </div>
  )
}
