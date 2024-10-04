import React,{useState,useContext} from 'react'
import { Context } from '../../Context'
import './index.css'

const Navbar = () => {
  const {searchText,setSearchText} = useContext(Context)
  console.log(searchText)
  return (
    <div className='nav-bg'>
      <h1>Books Library</h1>
      <input type="search" className='search-box'  value={searchText} onChange={(e)=>{setSearchText(e.target.value)}}/>
    </div>
  )
}

export default Navbar