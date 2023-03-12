import React from "react";
import { useState } from "react";

export default function AddContact() {
  const [info, setInfo] = useState({
    name: "",
    phone: "",
    email: "",
    address: "",
  });
  const handleSubmit = async () => {
    console.log(localStorage.getItem("token"))
    const res = await fetch("http://localhost:7000/contacts", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "authorization":`Bearer ${localStorage.getItem("token")}`
      },
      body: JSON.stringify(info),
    });
    const json = await res.json();
    console.log(json);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setInfo({ ...info, [name]: value });
  };

  return (
    <div className="addContact">
      <h2>Add a Contact</h2>
      <input
        type="text"
        name="name"
        placeholder="contact name"
        onChange={(event) => handleChange(event)}
        value={info.name}
      />
      <input
        type="text"
        name="phone"
        placeholder="contact phone"
        onChange={(event) => handleChange(event)}
        value={info.phone}
      />
      <input
        type="text"
        name="email"
        placeholder="contact email"
        onChange={(event) => handleChange(event)}
        value={info.email}
      />
      <input
        type="text"
        name="address"
        placeholder="contact address"
        onChange={handleChange}
        value={info.address}
      />
      <button onClick={handleSubmit} className="btn">
        Add
      </button>
    </div>
  );
}
