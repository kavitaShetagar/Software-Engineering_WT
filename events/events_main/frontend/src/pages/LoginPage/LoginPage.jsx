import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import "./LoginPage.css";

const LoginPage = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  // Regex pattern for valid email format
  const emailRegex = /^(01fe(21|22|23|24)bcs([0-9]{3}))@kletech\.ac\.in$/;

  // Hardcoded password for validation
  const correctPassword = "kleclub@123";

  // Handle email input change
  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  // Handle password input change
  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  // Validate login credentials and update the database
  const handleLogin = async (e) => {
    e.preventDefault();

    // Frontend validation: Email format and password check
    if (!emailRegex.test(email)) {
      setErrorMessage("Invalid email format. Use your college email.");
      return;
    }

    if (password !== correctPassword) {
      setErrorMessage("Invalid password. Please try again.");
      return;
    }

    // Backend API call for database update
    try {
      const response = await axios.post("http://localhost:5000/api/login", {
        username: email,
        password,
      });

      alert(response.data.message);
      navigate("/event-list"); // Navigate to the event list page after successful login
    } catch (error) {
      setErrorMessage(error.response?.data?.error || "Something went wrong.");
    }
  };

  return (
    <div className="login-page">
      <h2>Login</h2>
      <form onSubmit={handleLogin} className="login-form">
        <label>
          Email:
          <input
            type="email"
            value={email}
            onChange={handleEmailChange}
            placeholder="Enter your college email"
            required
          />
        </label>
        <label>
          Password:
          <input
            type="password"
            value={password}
            onChange={handlePasswordChange}
            placeholder="Enter your password"
            required
          />
        </label>
        {errorMessage && <p className="error-message">{errorMessage}</p>}
        <button type="submit" className="login-button">
          Login
        </button>
      </form>
    </div>
  );
};

export default LoginPage;
