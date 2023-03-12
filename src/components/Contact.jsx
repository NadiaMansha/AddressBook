import React from "react";
import { Link } from "react-router-dom";


export default function Contact({ contact }) {
  return (
    <Link to={`${contact._id}`}>
    <div className="contact">
     
      <h3>{contact.name}</h3>
      <p>
        <b>phone :</b> {contact.phone}
      </p>
      <p>
        <b> email:</b>
        {contact.email}
      </p>
      <p>
        <b> address:</b>
        {contact.address}
      </p>
    
    </div>
    </Link>
  );
}
