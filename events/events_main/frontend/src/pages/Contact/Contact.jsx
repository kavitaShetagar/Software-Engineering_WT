import React from 'react';
import './Contact.css';  // Ensure the updated styles are in Contact.css

const clubs = [
  {
    name: "Dance Club",
    id: "CC001",
    contactNumber: "+91–123–4567890",
    email: "culturalclub@kletech.ac.in",
    image: "/my_images/dance.jpeg", // Replace with actual image path
  },
  {
    name: "Drama Club",
    id: "SC002",
    contactNumber: "+91–987–6543210",
    email: "sportsclub@kletech.ac.in",
    image: "/my_images/drama_kle2.jpeg", // Replace with actual image path
  },
  {
    name: "Sports Club",
    id: "CC003",
    contactNumber: "+91–111–2223333",
    email: "codingclub@kletech.ac.in",
    image: "/my_images/sports.jpeg", // Replace with actual image path
  },
  {
    name: "DataScience Club",
    id: "CC004",
    contactNumber: "+91–111–2223333",
    email: "codingclub@kletech.ac.in",
    image: "/my_images/dataScience.jpeg", // Replace with actual image path
  },
  {
    name: "UPSC Club",
    id: "CC005",
    contactNumber: "+91–111–2223333",
    email: "codingclub@kletech.ac.in",
    image: "/my_images/upsc.jpeg", // Replace with actual image path
  },
  {
    name: "WordWorth English Club",
    id: "CC006",
    contactNumber: "+91–111–2223333",
    email: "codingclub@kletech.ac.in",
    image: "/my_images/words.jpeg", // Replace with actual image path
  },
  {
    name: "HigherStudy Club",
    id: "CC007",
    contactNumber: "+91–111–2223333",
    email: "codingclub@kletech.ac.in",
    image: "/my_images/study.jpeg", // Replace with actual image path
  },
  {
    name: "Music Club",
    id: "CC008",
    contactNumber: "+91–111–2223333",
    email: "codingclub@kletech.ac.in",
    image: "/my_images/music.jpeg", // Replace with actual image path
  },
  // Add more clubs as needed
];

const Contact = () => {
  return (
    <div className="contact-container">
      <header className="contact-header">
        
      </header>
      <main className="contact-main">
        <section className="contact-info">
          <h2>Club Contact Details</h2>
          <div className="contact-details">
            {clubs.map((club, index) => (
              <div className="contact-card" key={index}>
                <div
                  className="club-image"
                  style={{
                    backgroundImage: `url(${club.image})`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                  }}
                ></div>
                <div className="club-info">
                  <h3>{club.name}</h3>
                  <p><strong>Club ID:</strong> {club.id}</p>
                  <p><strong>Contact Number:</strong> {club.contactNumber}</p>
                  <p><strong>Email:</strong> {club.email}</p>
                  <p>If you have any queries, please feel free to contact the club.</p>
                </div>
              </div>
            ))}
          </div>
        </section>
      </main>
      <footer className="contact-footer">
        <p>&copy; 2024 KLE Tech. All Rights Reserved.</p>
      </footer>
    </div>
  );
};

export default Contact;
