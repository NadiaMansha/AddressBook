import React from 'react'
import { Link } from 'react-router-dom'

const Logout = () => {
    const Logout = () => {
        localStorage.removeItem("token")
        window.location.href = "/"
    }
  return (
    <div className='Logout'>
        <h1 
        style={{
            textAlign:"center",
           marginBottom:50,
        }}
        >Are you sure you want to Logout?</h1>
        <button className='btn' onClick={Logout}>Yes</button>
        <button className='btn'>
          <Link style={{
            textDecoration: "none",
            color: "white",
          }} to="/">No</Link>
          </button>
    </div>
  )
}

export default Logout