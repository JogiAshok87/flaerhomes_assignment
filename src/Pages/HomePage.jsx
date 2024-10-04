import React,{useEffect,useState,useContext} from 'react'
import { Link } from 'react-router-dom'
import {Context} from  '../Context.jsx'


const books =  [
    {
    "id": 1,
    "title": "The Great Gatsby",
    "author": "F. Scott Fitzgerald",
    "genre": "Classic",
    "rating": 4.7,
    "description": "A novel set in the Jazz Age that explores themes of wealth, love, and the American Dream.",
    "publication_year": 1925
    },
    {
    "id": 2,
    "title": "To Kill a Mockingbird",
    "author": "Harper Lee",
    "genre": "Fiction",
    "rating": 4.8,
    "description": "A timeless novel of a child's moral awakening and a poignant tale of race and justice in the American South.",
    "publication_year": 1960
    },
    {
    "id": 3,
    "title": "1984",
    "author": "George Orwell",
    "genre": "Dystopian",
    "rating": 4.6,
    "description": "A dystopian social science fiction novel and cautionary tale about the dangers of totalitarianism.",
    "publication_year": 1949
    },
    {
    "id": 4,
    "title": "Pride and Prejudice",
    "author": "Jane Austen",
    "genre": "Romance",
    "rating": 4.9,
    "description": "A romantic novel that also serves as a social commentary on the British landed gentry of the early 19th century.",
    "publication_year": 1813
    },
    {
    "id": 5,
    "title": "The Catcher in the Rye",
    "author": "J.D. Salinger",
    "genre": "Fiction",
    "rating": 4.3,
    "description": "A story about a young boy’s journey through the challenges of adolescence.",
    "publication_year": 1951
    }
    ]
    

const HomePage = () => {
    const {BooksData,setBooksData,searchText,} = useContext(Context)


    
    useEffect(()=>{
        setBooksData(books)
        
    },[setBooksData])

    useEffect(()=>{
        const getfilteredbooks = books.filter((eachbook)=>{
            return eachbook.title.toLowerCase().includes(searchText.toLowerCase())
            //console.log('inputSearchedText :',booktitle)
        })
        setBooksData(getfilteredbooks)
        //console.log('filterBooks :',BooksData)
    },[setBooksData,searchText])



  return (
    <section className="Cardcontainer">
        
        {BooksData.map((eachBook,index)=>(
            <Link to={`BookDetailsPage/${eachBook.id}`}>
            <div className='card' key={index} >
              <img src="/image.png" alt=""/>
              <div className="cardContent">
                <h4>{eachBook.title}</h4>
                <p>{eachBook.author}</p>

              </div>
            </div>
            </Link>
        ))}
       
    </section>
  )
}

export default HomePage