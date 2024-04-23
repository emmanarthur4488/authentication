import React, { useEffect, useState } from 'react'
import Dashboard from '../../Dashboard/Dashboard'
import './bookstore.css'
import axios from 'axios'
import {ToastContainer, toast} from 'react-toastify'






const Bookstore = () => {

    const [books, setBooks] = useState([])

    const url = 'https://fakerapi.it/api/v1/books?_quantity=8'

    useEffect(() =>{
        axios.get(url)
        .then((response) =>{
            if(response.status === 200){
                toast.success('Books loaded successfully')
                setBooks(response.data.data)
            }else{
                toast.error('No data found')
            }
        })
        .catch((err) =>{
            if(err.response){
                toast.error('something went wrong')
            }
        })

    }, [])





  return (
    <div>
        <div className="book-container">
            <ToastContainer/>
            <div>
                <Dashboard/>
            </div>

           <div className="card">
                {
                    books ? books.map((book, idx)=> (
                    <div key={idx} className="bookstore-card">
                        <div className="bookstore-card-image">
                            <img src={book.image} alt="icon"/>
                        </div>

                        <div className="details">
                            <h5 className="title">{book.title}</h5>
                            <p className="author">{book.author}</p>
                            <p className="genre">{book.genre}</p>
                            <p className="published">{book.published}</p>
                        </div>
                    </div>
                    ))
                    : null
                }

           </div>
            
        </div>
    </div>
  )
}

export default Bookstore
