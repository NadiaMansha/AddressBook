import React from "react";
import { NavLink } from "react-router-dom";

export default function Navbar({search,setSearch,token}) {
  const activeStyles = {
    fontWeight: "bold",
    textDecoration: "underline",
    color: "#161616"
}

  return (
    <div className="navbar">
      <h2 className="logo">MyAddressBook</h2>
      <ul>
        <li>
        <NavLink to="/" className="Link"
          style={
            ({isActive})=> isActive? activeStyles:null}
            
        
        >Home</NavLink>
        </li>
        <li>
        <NavLink to="/contacts" 
          style={
            ({isActive})=> isActive? activeStyles:null}
          className="Link">Contacts</NavLink>
        </li>
        

        <li>
        <NavLink to="/addContact" className="Link"
          style={
            ({isActive})=> isActive? activeStyles:null}> AddNewContact</NavLink>
        </li>
        
        {
          token?
          <li>
       
          
          <NavLink to="/Logout" className="Link"
          style={
            ({isActive})=> isActive? activeStyles:null}>Logout</NavLink>
      </li>:
          
       
          <>
        <li>
        <NavLink to="/Login" className="Link"
          style={
            ({isActive})=> isActive? activeStyles:null}>Login</NavLink>
          </li>  
          <li>
          <NavLink to="/Signup"className="Link"
          style={
            ({isActive})=> isActive? activeStyles:null} >Signup</NavLink>
          </li>
      
      
            </>
      
     

        }
      
      </ul>
      <input
        type="search"
        name="search"
        id="search"
        placeholder="Search your Contacts here"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />
    </div>
  );
}
