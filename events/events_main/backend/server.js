const express = require("express");
const bodyParser = require("body-parser");
const mysql = require("mysql");
const cors = require("cors");
const app = express();
const port = 5000;

// Middleware
app.use(cors());
app.use(bodyParser.json());
app.use(express.json());

// MySQL Database Connection
const db = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database: "CampusConnect1",
});

db.connect((err) => {
  if (err) {
    console.error("Database connection failed:", err);
    return;
  }
  console.log("Connected to MySQL database.");
});

// API Routes

// Login API
app.post("/api/login", (req, res) => {
  const { username, password } = req.body;

  if (!username || !password) {
    return res.status(400).json({ error: "Username and password are required." });
  }

  const query = "SELECT * FROM login WHERE username = ?";
  db.query(query, [username], (err, results) => {
    if (err) {
      return res.status(500).json({ error: "Database query error." });
    }

    if (results.length > 0) {
      if (results[0].password === password) {
        return res.status(200).json({ message: "Login successful." });
      } else {
        return res.status(401).json({ error: "Invalid password." });
      }
    } else {
      const insertQuery = "INSERT INTO login (username, password) VALUES (?, ?)";
      db.query(insertQuery, [username, password], (err, result) => {
        if (err) {
          return res.status(500).json({ error: "Database insertion error." });
        }
        return res.status(200).json({ message: "User registered and logged in successfully." });
      });
    }
  });
});

// Registration API
app.post("/api/register", (req, res) => {
  const { club_Id, usn, name, email, contactNo } = req.body;

  if (!club_Id || !usn || !name || !email || !contactNo) {
    return res.status(400).json({ error: "All fields are required." });
  }

  const query = `
    INSERT INTO registration (club_Id, usn, name, email, contactNo)
    VALUES (?, ?, ?, ?, ?)
  `;

  db.query(query, [club_Id, usn, name, email, contactNo], (err, result) => {
    if (err) {
      return res.status(500).json({ error: "Database insertion error." });
    }
    return res.status(200).json({ message: "Registration successful." });
  });
});

// Add a new club
app.post('/add-club', (req, res) => {
  const { clubId, clubName } = req.body;

  if (!clubId || !clubName) {
    return res.status(400).json({ error: 'Club ID and Club Name are required.' });
  }

  // Check if the club ID already exists
  const checkQuery = 'SELECT * FROM static_club WHERE club_Id = ?';
  db.query(checkQuery, [clubId], (err, results) => {
    if (err) {
      console.error(err);
      return res.status(500).json({ error: 'Database query error.' });
    }

    if (results.length > 0) {
      return res.status(400).json({ error: 'Club ID already exists.' });
    }

    // Insert new club if not exists
    const insertQuery = 'INSERT INTO static_club (club_Id, club_name) VALUES (?, ?)';
    db.query(insertQuery, [clubId, clubName], (err, result) => {
      if (err) {
        console.error(err);
        return res.status(500).json({ error: 'Error occurred while adding the club.' });
      }
      return res.status(200).json({ message: 'Club added successfully!' });
    });
  });
});


// DELETE club by name
app.delete('/club/:id', async (req, res) => {
  const { id } = req.params;

  try {
    const query = 'DELETE FROM static_club WHERE club_Id = ?';
    db.query(query, [id], (err, result) => {
      if (err) {
        console.error(err);
        return res.status(500).json({ error: "Error deleting club." });
      }

      if (result.affectedRows === 0) {
        return res.status(404).json({ error: "Club not found." });
      }

      res.status(200).json({ message: `Club with ID ${id} deleted successfully!` });
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal Server Error.' });
  }
});


// Fetch all registered students
app.get('/registered-students', (req, res) => {
  const query = 'SELECT * FROM registration'; // Ensure your table name is correct.

  // Query the database
  db.query(query, (err, results) => {
    if (err) {
      console.error('Database query error:', err); // Log the error for debugging purposes
      return res.status(500).json({ error: 'Database query error.' });
    }

    if (results.length === 0) {
      return res.status(404).json({ message: 'No registered students found.' });
    }

    // Respond with the student data
    res.status(200).json({ students: results });
  });
});



// Start the server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
