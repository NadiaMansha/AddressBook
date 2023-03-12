import React from 'react'
import { Link ,Outlet} from 'react-router-dom'
import Navbar from './components/Navbar'
import Footer from './Footer'

const Layout = ({token ,search,setSearch}) => {
  return (
    <div className='layout'>
        <Navbar token={token} 
        search={search}
        setSearch={setSearch}
        />
        <Outlet />
        <Footer />
    
    </div>
    
  )
}

export default Layout