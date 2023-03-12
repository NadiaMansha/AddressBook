import React, { useEffect, useState } from 'react'
import { Outlet,Navigate } from 'react-router-dom'
import { useLocation } from 'react-router-dom';

const AuthRequired = ({token}) => {
  
   return(
         <>
            {token ? <Outlet/> : <Navigate to="/Login"
            state={{message:"You must Login First"} }
            replace
            />
            }
            </>
   )
         
    
 
}

export default AuthRequired