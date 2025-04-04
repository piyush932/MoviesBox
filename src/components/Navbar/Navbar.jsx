import React from 'react';
import './Navbar.css'

function Navbar() {
  return (
    <div className='navbar-wrapper'>
      <div>MoviesVerse</div>
      <div className="search-bar">
      <input type='text'/>
      </div>
      <div>
        Theme
      </div>
     
    </div>
  )
}

export default Navbar