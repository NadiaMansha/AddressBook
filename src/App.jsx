import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./Layout";
import Home from "./components/Home";
import Login from "./components/Login";
import Signup from "./components/Signup";
import AddContact from "./components/AddContact";
import Contacts from "./components/Contacts";
import ContactDetail from "./components/ContactDetail";
import AuthRequired from "./components/AuthRequired";
import Logout from "./components/Logout";
import NotFound from "./components/NotFound";
import { useState, useEffect } from "react";
import './App.css'

function App() {
  const [search, setSearch] = useState("");
  const [searchResults, setSearhResults] = useState([]);
  const [contactsData, setContactsData] = useState([]);
  const [token, setToken] = useState(null);
  const [error,setError]=useState(null)

  
  useEffect(() => {
    setToken(localStorage.getItem("token"))
    console.log(token)
    
  }, [token])
  useEffect(() => {
  try {
    const fetchData = async () => {
      const response = await fetch("http://localhost:7000/contacts", {
        method: "GET",
        mode: "no-cors",
        headers: {  
          "Content-Type": "application/json",
          "authorization":`Bearer ${localStorage.getItem("token")}`
        },
      });
      
      const res = await response.json();
      console.log(res)
      setContactsData(res.data);
      console.log(token);
    };
    fetchData();
  } catch (err) {
    console.log(err);
    setError(err)
  }

  }, []);
      
  useEffect(() => {
    try{

      const results = contactsData?.filter((contact) =>
      contact.name.toLowerCase().includes(search.toLocaleLowerCase())
    );
  
    setSearhResults(results);
    }
    catch(error){
      console.log(error)
    }
   
  }, [search, contactsData]);

  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout token={token} search={search} setSearch={setSearch}/>}>
            <Route index  element={<Home token={token} />} />
            <Route path="Login" element={<Login />} />
            <Route path="signup" element={<Signup />} />
            <Route path="Logout" element={<Logout />} />
            <Route  element={<AuthRequired  token={token}/>}>
              <Route path="contacts" element={<Contacts 
             error={error}
             contactsData={searchResults}
              />} />
              <Route path="contacts/:id" element={<ContactDetail />} />
              <Route path="addcontact" element={<AddContact />} />
            </Route>
            <Route path="*" element={<NotFound />} />
          </Route>
        </Routes>
      </BrowserRouter>
   
    </div>
  );
}

export default App;
