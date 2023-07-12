import React from 'react'
import { Link } from 'react-router-dom'

const Nav = () => {
  return (
    <div style={{backgroundColor:"gray", height:"70px",padding:"10px"}}>
 <Link to="/" className="nav-link">
        Home
      </Link>
      <Link to="/show-books" className="nav-link">
        Show Books
      </Link>
      <Link to="/add-book" className="nav-link">
        Add Book
      </Link>
    </div>
  )
}

export default Nav