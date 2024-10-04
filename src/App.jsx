import { useState } from 'react'
import { BrowserRouter as Router,Routes,Route } from 'react-router-dom'
import HomePage from './Pages/HomePage'
import Navbar from './Components/Navbar/index'
import BookDetailsPage from './Pages/BookDetailsPage'


function App() {
  

  return (
    <Router>
      <Navbar />
      <Routes>
         <Route exact path="/" element={<HomePage />}/>
         <Route path="BookDetailsPage/:id" element={<BookDetailsPage />} />
         
      </Routes>
    </Router>
    
  )
}

export default App
