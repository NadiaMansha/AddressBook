import React from 'react'
import { Link } from 'react-router-dom'
const NotFound = () => {
  return (
    <div className='NotFound' >
        <h1>404</h1>
        <h2>Page not found</h2>
       <button className="btn">
        <Link 
        to=".."
        relative="path"
        style={
            {
                textDecoration:"none",
                color:"white",
            }
        }
        >
            Go back
        </Link>
       </button>
    </div>
  )
}

export default NotFound