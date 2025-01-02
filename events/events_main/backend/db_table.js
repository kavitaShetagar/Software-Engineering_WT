var mysql = require('mysql');

// Create connection
const con = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '', // Replace with your MySQL root password
    database: 'CampusConnect' // Ensure the database exists
});

// Connect to MySQL
con.connect(function (err) {
    if (err) throw err;
    console.log("Connected to MySQL!");

    // Table: login
    const loginTable = `
        CREATE TABLE IF NOT EXISTS login (
            username VARCHAR(255) NOT NULL PRIMARY KEY,
            password VARCHAR(255) NOT NULL
        ) ENGINE=InnoDB DEFAULT CHARSET=utf8;
    `;

    // Table: static_club
    const staticClubTable = `
        CREATE TABLE IF NOT EXISTS static_club (
            club_Id INT NOT NULL PRIMARY KEY,
            club_name VARCHAR(255) NOT NULL
        ) ENGINE=InnoDB DEFAULT CHARSET=utf8;
    `;

    // Table: admin_table
    const adminTable = `
        CREATE TABLE IF NOT EXISTS admin_table (
            club_Id INT NOT NULL PRIMARY KEY,
            club_name VARCHAR(255) NOT NULL,
            email_admin VARCHAR(255) NOT NULL,
            password VARCHAR(255) NOT NULL,
            FOREIGN KEY (club_Id) REFERENCES static_club(club_Id) ON DELETE CASCADE ON UPDATE CASCADE
        ) ENGINE=InnoDB DEFAULT CHARSET=utf8;
    `;

    // Table: registration
    const registrationTable = `
        CREATE TABLE IF NOT EXISTS registration (
            id BIGINT AUTO_INCREMENT PRIMARY KEY,
            club_Id INT NOT NULL,
            usn VARCHAR(255) NOT NULL,
            name VARCHAR(255) NOT NULL,
            email VARCHAR(255) NOT NULL,
            contactNo VARCHAR(15) NOT NULL,
            FOREIGN KEY (club_Id) REFERENCES static_club(club_Id) ON DELETE CASCADE ON UPDATE NO ACTION
        ) ENGINE=InnoDB DEFAULT CHARSET=utf8;
    `;

    // Function to execute queries sequentially
    function executeQueries() {
        con.query(loginTable, function (err, result) {
            if (err) throw err;
            console.log("Table 'login' created or already exists.");

            con.query(staticClubTable, function (err, result) {
                if (err) throw err;
                console.log("Table 'static_club' created or already exists.");

                // Insert predefined data into static_club
                const insertSampleData = `
                    INSERT IGNORE INTO static_club (club_Id, club_name) VALUES
                    (1, 'Dance Club'),
                    (2, 'Drama Club'),
                    (3, 'Music Club'),
                    (4, 'Sports Club'),
                    (5, 'Higher Studies Club'),
                    (6, 'UPSC Club'),
                    (7, 'Data Science Club'),
                    (8, 'Wordsworth English Club');
                `;
                con.query(insertSampleData, function (err, result) {
                    if (err) throw err;
                    console.log("Sample data inserted into 'static_club'.");

                    con.query(adminTable, function (err, result) {
                        if (err) throw err;
                        console.log("Table 'admin_table' created or already exists.");

                        // Insert predefined data into admin_table with passwords
                        const insertAdminData = `
                            INSERT IGNORE INTO admin_table (club_Id, club_name, email_admin, password) VALUES
                            (1, 'Dance Club', 'danceadmin@gmail.com', 'danceadmin@123'),
                            (2, 'Drama Club', 'dramaadmin@gmail.com', 'dramaadmin@123'),
                            (3, 'Music Club', 'musicadmin@gmail.com', 'musicadmin@123'),
                            (4, 'Sports Club', 'sportsadmin@gmail.com', 'sportsadmin@123'),
                            (5, 'Higher Studies Club', 'higherstudiesadmin@gmail.com', 'higherstudiesadmin@123'),
                            (6, 'UPSC Club', 'upscadmin@gmail.com', 'upscadmin@123'),
                            (7, 'Data Science Club', 'datascienceadmin@gmail.com', 'datascienceadmin@123'),
                            (8, 'Wordsworth English Club', 'wordsworthadmin@gmail.com', 'wordsworthadmin@123');
                        `;
                        con.query(insertAdminData, function (err, result) {
                            if (err) throw err;
                            console.log("Sample data inserted into 'admin_table'.");

                            con.query(registrationTable, function (err, result) {
                                if (err) throw err;
                                console.log("Table 'registration' created or already exists.");

                                // Close connection
                                con.end(function (err) {
                                    if (err) throw err;
                                    console.log("Connection closed.");
                                });
                            });
                        });
                    });
                });
            });
        });
    }

    executeQueries();
});
