import React from "react";
import { Link } from "react-router-dom";
import { useNavigate,useLocation} from "react-router-dom";
import { useState } from "react";

export default function Login() {
 
  const location = useLocation();
  let navigate = useNavigate();
  const [credentials, setCredentials] = useState({
    email: "",
    password: "",
  });
  const handleChange = (event) => {
    const { name, value } = event.target;
    setCredentials({ ...credentials, [name]: value });
  };
  const handleSubmit = async () => {
    const response = await fetch("http://localhost:7000/users/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(credentials),
    });
    const res = await response.json();
    localStorage.setItem("token",res.token)
    console.log(res.token)
    if (res.success) {
    navigate("/",{replace:true})
    window.location.reload();
    
    }
    console.log(res);
  };
  return (
    <>
    {
      location.state?.message?
      <h2 style={{textAlign:"center",
    margin:20,
   color:"red"
  }}>{location.state.message}</h2>
      :""
      
  }
    <div className="Login">
      
        
      <h2>Login</h2>
      <input
        type="email"
        name="email"
        id="email"
        placeholder="email"
        onChange={(event) => handleChange(event)}
        value={credentials.email}
      />
      <input
        type="password"
        name="password"
        id="passwordd"
        placeholder="password"
        onChange={(event) => handleChange(event)}
        value={credentials.password}
      />
      <button
        className="btn"
        id="signup-btn"
        type="submit"
        onClick={handleSubmit}
      >
        Login
      </button>
      <p>
        Don't have an account? <Link to="/Signup">Signup</Link>
      </p>
    </div>
    </>
  );
}
