import React from 'react';
import { useNavigate } from 'react-router-dom';
import './RoleSelectionPage.css';

const RoleSelectionPage = () => {
  const navigate = useNavigate();

  const handleRoleSelect = (role) => {
    if (role === 'admin') {
      navigate('/admin-login');  // Navigate to Admin login page
    } else if (role === 'student') {
      navigate('/login');  // Navigate to Student login page
    }
  };

  return (
    <div className="role-selection-container">
      <header className="role-selection-header">
        <h2>Login as</h2>
      </header>
      <main className="role-selection-main">
        <div className="role-buttons">
          <button
            className="role-btn admin-btn"
            onClick={() => handleRoleSelect('admin')}
          >
            ADMIN
          </button>
          <button
            className="role-btn student-btn"
            onClick={() => handleRoleSelect('student')}
          >
            STUDENT
          </button>
        </div>
      </main>
      <footer className="role-selection-footer">
        <p>&copy; 2024 KLE Tech. All Rights Reserved.</p>
      </footer>
    </div>
  );
};

export default RoleSelectionPage;
