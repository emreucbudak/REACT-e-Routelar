import React from 'react'
import { Link , outlet} from 'react-router-dom'


function History() {
  return (
    <>
        <div>History</div>
        <nav>
            <Link to = "company ">Our Companies</Link>
            <Link to = "team">Our Team</Link>
        </nav>
    </>
  )
}

export default History