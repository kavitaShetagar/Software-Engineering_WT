import React from 'react';
import { useNavigate } from 'react-router-dom';  // Import useNavigate from react-router-dom
import './AdminDashboard.css';

const AdminDashboard = () => {
  const navigate = useNavigate();  // Hook to navigate to other pages

  return (
    <div className="admin-dashboard-container">
      <h2>Admin Dashboard</h2>
      <div className="dashboard-options">
        <button onClick={() => navigate('/add-club')}>Add Club</button>
        <button onClick={() => navigate('/delete-club')}>Delete Club</button>
      </div>
    </div>
  );
};

export default AdminDashboard;
