import { useState } from "react";
import { useNavigate } from "react-router-dom";
import logo1 from "../assets/logo1.png";

export default function Signup() {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handleUsernameChange = (e) => {
    setUsername(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleSignup = (e) => {
    e.preventDefault();

    // Basic validation
    if (!email || !username || !password) {
      setError("All fields are required");
      return;
    }

    // Perform signup logic here
    // For example, sending the data to a backend server
    fetch("/api/signup", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email, username, password }),
    })
      .then((response) => {
        if (response.ok) {
          // Redirect to the login page on successful signup
          navigate("/login");
        } else {
          return response.json().then((data) => {
            setError(data.message || "Signup failed");
          });
        }
      })
      .catch((err) => {
        setError("An error occurred. Please try again later.");
      });
  };

  return (
    <>
 
  <div className="search-container1">
  <img src={logo1} alt="Logo" className="navbar-logo1" />
  <span className="span2">Bewery</span>
  </div>
    <div className="signup-form">
      <h2>Sign Up</h2>
      {error && <p className="error">{error}</p>}
      <form onSubmit={handleSignup}>
        <div>
          <label>Email:</label>
          <br/>
          <input type="email" value={email} onChange={handleEmailChange} />
        </div>
        <div>
          <label>Username:</label>
          <br/>
          <input type="text" value={username} onChange={handleUsernameChange} />
        </div>
        <div>
          <label>Password:</label>
          <br/>
          <input type="password" value={password} onChange={handlePasswordChange} />
        </div>
        <button type="submit">Sign Up</button>
      </form>
    </div>
    </>
  );
}
