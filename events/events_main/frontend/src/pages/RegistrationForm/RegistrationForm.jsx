import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import "./RegistrationForm.css";

const RegistrationForm = () => {
  const navigate = useNavigate();
  const [selectedClub, setSelectedClub] = useState("");
  const [clubId, setClubId] = useState("");
  const [usn, setUsn] = useState("");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [contactNo, setContactNo] = useState("");
  const [isSubmitted, setIsSubmitted] = useState(false);

  const clubs = [
    { name: "Dance club", id: 1 },
    { name: "Drama", id: 2 },
    { name: "Music", id: 3 },
    { name: "Sports", id: 4 },
    { name: "Higher Study", id: 5 },
    { name: "UPSC", id: 6 },
    { name: "Data Science", id: 7 },
    { name: "Wordsworth English", id: 8 },
  ];

  const handleClubChange = (event) => {
    const selected = event.target.value;
    setSelectedClub(selected);
    const selectedClubId = clubs.find((club) => club.name === selected)?.id || "";
    setClubId(selectedClubId);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      await axios.post("http://localhost:5000/api/register", {
        club_Id: clubId,
        usn,
        name,
        email,
        contactNo,
      });
      setIsSubmitted(true);
    } catch (error) {
      alert(error.response?.data?.error || "Registration failed.");
    }
  };

  return (
    <div className="registration-page">
      {!isSubmitted ? (
        <>
          <h3>Register for {selectedClub || "a Club"}</h3>
          <form className="registration-form" onSubmit={handleSubmit}>
            <label>
              Club Name:
              <select value={selectedClub} onChange={handleClubChange} required>
                <option value="" disabled>
                  Select a Club
                </option>
                {clubs.map((club) => (
                  <option key={club.id} value={club.name}>
                    {club.name}
                  </option>
                ))}
              </select>
            </label>
            <label>
              USN:
              <input
                type="text"
                value={usn}
                onChange={(e) => setUsn(e.target.value)}
                placeholder="Enter your USN"
                required
              />
            </label>
            <label>
              Name:
              <input
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Enter your name"
                required
              />
            </label>
            <label>
              Email:
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email"
                required
              />
            </label>
            <label>
              Contact Number:
              <input
                type="tel"
                value={contactNo}
                onChange={(e) => setContactNo(e.target.value)}
                placeholder="Enter your contact number"
                required
              />
            </label>
            <button type="submit" className="submit-button">
              Submit
            </button>
            <button
              type="button"
              className="close-button"
              onClick={() => navigate(-1)}
            >
              Cancel
            </button>
          </form>
          <button 
            className="display-button" 
            onClick={() => navigate("/display-students")}
          >
            Display Students
          </button>
        </>
      ) : (
        <div className="success-message">
          <h3>Your registration form is submitted!</h3>
          <button className="close-button" onClick={() => navigate("/")}>
            Go to Home
          </button>
        </div>
      )}
    </div>
  );
};

export default RegistrationForm;
