import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useNavigate} from "react-router-dom";

export default function Signup() {
  let navigate = useNavigate();
  const [credentials, setCredentials] = useState({
    name: "",
    email: "",
    password: "",
  });
  const handleChange = (event) => {
    const { name, value } = event.target;
    setCredentials({ ...credentials, [name]: value });
  };

  const handleSubmit = async () => {
    const response = await fetch("http://localhost:7000/users", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(credentials),
    });
    const res = await response.json();
    localStorage.setItem("token",res.token)
    console.log(res.token);
    if (res.success) {
      navigate("/")
    }
    
  };

  return (
    <div className="signup">
      <h2>Sign Up</h2>
      <input
        type="text"
        name="name"
        id="username"
        placeholder="username"
        onChange={(event) => handleChange(event)}
        value={credentials.name}
      />
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
        type="submit "
        onClick={handleSubmit}
      >
        Sign Up
      </button>
      <>
        <p> Already have an account?</p> <Link to="/Login">Login</Link>
      </>
    </div>
  );
}
