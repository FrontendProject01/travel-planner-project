require('dotenv').config();
const express = require("express");
const mysql = require("mysql2");
const cors = require("cors");
const bodyParser = require("body-parser");

const app = express();
app.use(cors());
app.use(bodyParser.json());

// MySQL Connection
const db = mysql.createConnection({
    host: "localhost",
    user: "root",       // Change this if needed
    password: "srijan",       // Add your MySQL password
    database: "travelDB"
});

db.connect(err => {
    if (err) {
        console.error("Database connection failed: " + err.message);
    } else {
        console.log("Connected to MySQL database!");
    }
});

// Route to handle new bookings
app.post("/bookings", (req, res) => {
    const { name, email, phone, destination, travel_date, guests, package_name, total_price, payment_method, notes } = req.body;

    const sql = "INSERT INTO bookings (name, email, phone, destination, travel_date, guests, package_name, total_price, payment_method, notes) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?)";
    const values = [name, email, phone, destination, travel_date, guests, package_name, total_price, payment_method, notes];

    db.query(sql, values, (err, result) => {
        if (err) {
            console.error("Booking failed: " + err.message);
            res.status(500).json({ message: "Booking failed!" });
        } else {
            res.status(200).json({ message: "Booking successful!", bookingId: result.insertId });
        }
    });
});

// Start Server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
