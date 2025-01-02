import React, { useState, useEffect } from 'react';
import axios from 'axios';
import "./DisplayStudents.css";

const RegisteredStudents = () => {
  const [students, setStudents] = useState([]);
  const [errorMessage, setErrorMessage] = useState('');
  const [loading, setLoading] = useState(true); // Added loading state

  // Fetch the registered students when the component mounts
  useEffect(() => {
    const fetchStudents = async () => {
      try {
        const response = await axios.get('http://localhost:5000/registered-students');
        setStudents(response.data.students || []); // Ensure response.data.students exists
        setLoading(false); // Stop loading once data is fetched
      } catch (error) {
        setErrorMessage(error.response?.data?.error || 'Error occurred while fetching student data.');
        setLoading(false);
      }
    };

    fetchStudents();
  }, []);

  return (
    <div>
      <h2>Registered Students</h2>
      {loading && <p>Loading students...</p>} {/* Loading message */}
      {errorMessage && <p className="error-message">{errorMessage}</p>}
      {!loading && !errorMessage && (
        <table>
          <thead>
            <tr>
              <th>Club ID</th>
              <th>USN</th>
              <th>Name</th>
              <th>Email</th>
              <th>Contact No</th>
            </tr>
          </thead>
          <tbody>
            {students.length > 0 ? (
              students.map((student) => (
                <tr key={student.usn}>
                  <td>{student.club_Id}</td>
                  <td>{student.usn}</td>
                  <td>{student.name}</td>
                  <td>{student.email}</td>
                  <td>{student.contactNo}</td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan="5">No registered students found.</td>
              </tr>
            )}
          </tbody>
        </table>
      )}
    </div>
  );
};

export default RegisteredStudents;
