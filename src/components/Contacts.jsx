import React, { useState } from "react";
import Contact from "./Contact";
import { useEffect } from "react";
import { useContext } from "react";
import ContactsContext from "../context/contactsContext";
import { Link } from "react-router-dom";

export default function Contacts({ contactsData,error }) {

  try {
    
    var contactList = contactsData?.map((contact) => {
      return <Contact contact={contact} key={contact._id} />;
    });
  } catch (err) {
    console.log("No contacts", err);
    setError(err)
  }
console.log(error)
  return(
   <>
   {
    error?
    <p>{error}</p>
    :
    <div className="contacts">
      {contactList}
    </div>
   }
   </>

  )
}
