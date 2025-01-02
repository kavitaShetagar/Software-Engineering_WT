import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';  // Import useNavigate from react-router-dom

const DeleteClub = () => {
  const [clubId, setClubId] = useState('');  // Use clubId instead of clubName
  const [message, setMessage] = useState('');
  const navigate = useNavigate();  // Hook to navigate back to Admin Dashboard

  const handleDeleteClub = async (e) => {
    e.preventDefault();

    if (clubId) {
      // Example: You can call the DELETE API here to remove the club by ID from the database
      try {
        const response = await fetch(`http://localhost:5000/club/${clubId}`, {
          method: 'DELETE',
          headers: {
            'Content-Type': 'application/json',
          },
        });

        const data = await response.json();

        if (response.status === 200) {
          setMessage(`Club with ID "${clubId}" deleted successfully!`);
          setClubId('');  // Clear the input field
          setTimeout(() => navigate('/admin-dashboard'), 2000);  // Navigate back to Admin Dashboard after 2 seconds
        } else {
          setMessage(data.message || 'Error deleting club.');
        }
      } catch (error) {
        setMessage('Error deleting club.');
      }
    } else {
      setMessage('Please enter a valid club ID.');
    }
  };

  return (
    <div className="delete-club-container">
      <h2>Delete Club</h2>
      <form onSubmit={handleDeleteClub}>
        <div>
          <label>Enter Club ID to Delete:</label>
          <input
            type="text"
            value={clubId}
            onChange={(e) => setClubId(e.target.value)}
            required
          />
        </div>
        <button type="submit">Delete Club</button>
      </form>

      {message && <p>{message}</p>}
    </div>
  );
};

export default DeleteClub;
