import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';  // Import useNavigate from react-router-dom
import './AdminLogin.css';

const AdminLogin = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [message, setMessage] = useState('');
  const [messageType, setMessageType] = useState('');
  const navigate = useNavigate();  // Hook to navigate to another page

  // Handle form submission and login
  const handleSubmit = (e) => {
    e.preventDefault();

    // Hardcoded admin credentials
    const adminEmail = 'admin@gmail.com';
    const adminPassword = 'admin@123';

    // Check if entered credentials match the hardcoded admin credentials
    if (email === adminEmail && password === adminPassword) {
      setMessage('Login successful! Welcome, Admin.');
      setMessageType('success');
      setEmail('');
      setPassword('');

      // Call handleNext after successful login
      handleNext();
    } else {
      setMessage('Invalid email or password.');
      setMessageType('error');
    }
  };

  // Navigate to the Admin Dashboard
  const handleNext = () => {
    navigate('/admin-dashboard');  // Redirect to AdminDashboard page after login
  };

  return (
    <div className="admin-login-container">
      <h2>Admin Login</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Email</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div>
          <label>Password</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        
        <button type="submit">Login</button>
      </form>
      {message && (
        <p className={messageType === 'success' ? 'success-message' : 'error-message'}>
          {message}
        </p>
      )}
    </div>
  );
};

export default AdminLogin;
