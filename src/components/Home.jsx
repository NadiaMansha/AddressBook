import React from 'react'
import { Link } from 'react-router-dom'

const Home = ({token}) => {
  return (
    <div className='Home'>
        <h1>Welcome to our website</h1>
        <p>Here you can save your contacts of your family and friends</p>
        
        {
          token?
          <button className='btn'><Link to="contacts"> See your contacts</Link></button>:
          <>
          <p>Login or Sigup to see and add contacts</p>
          <button className='btn'><Link to="Login">Login</Link></button>
          <button className='btn'><Link to="Signup">Signup</Link></button>
          </>

        }
      
           
            
    </div>
  )
}

export default Home