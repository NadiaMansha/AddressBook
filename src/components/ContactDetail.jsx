import React, { useEffect, useState } from 'react'
import { useNavigate, useParams,Navigate } from 'react-router-dom'
import userImage from '../assets/user.jpg'
import { MailOutlined ,PhoneOutlined} from '@ant-design/icons'
const ContactDetail = () => {
  const [contact,setContact]=useState(null)
  const {id} = useParams()
  const navigate = useNavigate()
  useEffect(()=>{
    const fetchData = async ()=>{
      const res = await fetch(`http://localhost:7000/contacts/${id}`,{
        method:"GET",
        headers:{
          "Content-Type":"application/json",
          "authorization":`Bearer ${localStorage.getItem("token")}`
          }
          })
      const data = await res.json()
      setContact(data.data)
    }
    fetchData()
  },[])
  console.log(id)
 const handleDelete=async()=>{
    const res = await fetch(`http://localhost:5000/contacts/${id}`,{
      method:"DELETE",
      headers:{
        "Content-Type":"application/json",
          "authorization":`Bearer ${localStorage.getItem("token")}`
      }
    })
    const data = await res.json()
    console.log(data)
    console.log("delete")
    navigate("/contacts")
 }
 

  return (
    <div className='contact-detail'>
      <h1>Contact Detail</h1>
      {
        contact?
        <>
       {
        contact.image?
        <img
        style={{
          width: "15em",
          height: "12em",
        }}
        src={contact.image} alt={contact.name} />
        :
        <img src={userImage}
        style={{
          width: "15em",
          height: "12em",
        }}
         />
        
        }
        <h3>{contact.name}</h3>
        <p>
          <PhoneOutlined />
          <b>phone :</b> {contact.phone}
        </p>
        <p>
          <MailOutlined />
          <b> email:</b>
          {contact.email}
        </p>
        <p>
          <b> address:</b>
          {contact.address}
        </p>
        <button className="btn" onClick={handleDelete}>
          Delete
        </button>
        </>
        :""
      }
     
    </div>
  )
}

export default ContactDetail