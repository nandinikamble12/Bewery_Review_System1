import { useState } from "react";
import { useNavigate } from "react-router-dom";
import logo1 from "../assets/logo1.png";

export default function Login() {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleLogin = (e) => {
    e.preventDefault();

    // Perform login logic here
    // For example, sending the data to a backend server
    fetch("/api/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email, password }),
    })
      .then((response) => {
        if (response.ok) {
          // Redirect to the homepage or another page on successful login
          navigate("/Dashboard");
        } else {
          return response.json().then((data) => {
            setError(data.message || "Login failed");
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
      <h2>Login</h2>
      {error && <p className="error">{error}</p>}
      <form onSubmit={handleLogin}>
        <div>
          <label>Email:</label>
          <input type="email" value={email} onChange={handleEmailChange} />
        </div>
        <div>
          <label>Password:</label>
          <input type="password" value={password} onChange={handlePasswordChange} />
        </div>
        <button type="submit">Login</button>
      </form>
    </div>
    </>
  );
}
