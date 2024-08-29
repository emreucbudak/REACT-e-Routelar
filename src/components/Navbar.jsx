import React from 'react'
import {Link} from 'react-router-dom'

function Navbar() {
  return (
    <nav className='mainnav'>
        <Link to='/'>Home</Link>
        <Link to='/aboutUS'>About US</Link>
        <Link to='/history'>History</Link>

    </nav>
  )
}

export default Navbar