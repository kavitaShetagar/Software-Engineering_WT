import React, { useState } from 'react';
import axios from 'axios';
import './AddClub.css';

const AddClub = () => {
  const [clubId, setClubId] = useState('');
  const [clubName, setClubName] = useState('');
  const [message, setMessage] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      // API call to add the club
      const response = await axios.post('http://localhost:5000/add-club', {
        clubId,
        clubName,
      });
      setMessage(response.data.message);
      setErrorMessage('');
    } catch (error) {
      setErrorMessage(
        error.response?.data?.error || 'Error occurred while adding the club.'
      );
      setMessage('');
    }
  };

  return (
    <div className="add-club-container">
      <h2>Add Club</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Club ID:</label>
          <input
            type="number"
            value={clubId}
            onChange={(e) => setClubId(e.target.value)}
            required
          />
        </div>
        <div>
          <label>Club Name:</label>
          <input
            type="text"
            value={clubName}
            onChange={(e) => setClubName(e.target.value)}
            required
          />
        </div>
        <button type="submit">Add Club</button>
      </form>

      {errorMessage && <p className="error-message">{errorMessage}</p>}
      {message && <p className="success-message">{message}</p>}
    </div>
  );
};

export default AddClub;
