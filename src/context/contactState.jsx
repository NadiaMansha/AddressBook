import ContactsContext from "./contactsContext";
import { useState } from "react";
import React from "react";

export default function contactState() {
  const contactInitial = {
    conatcts: [],
  };
  const [contactsData, setContactsData] = useState(contactInitial);

  // getting all contacts from server and storing in state with user login details

  return (
    <ContactsContext.Provider value={{ contactsData, fetchData }}>
      {props.children}
    </ContactsContext.Provider>
  );
}
