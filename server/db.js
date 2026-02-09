// db.js - Database connection and initialization
const sqlite3 = require('sqlite3').verbose();
const path = require('path');

// Create/connect to database
const db = new sqlite3.Database(path.join(__dirname, 'waitlist.db'), (err) => {
    if (err) {
        console.error('Error connecting to database:', err);
    } else {
        console.log('Connected to SQLite database');
    }
});

// Create table if it doesn't exist
db.run(`CREATE TABLE IF NOT EXISTS users (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    name TEXT NOT NULL,
    email VARCHAR(255) NOT NULL UNIQUE,
    occupation TEXT NOT NULL,
    message TEXT NOT NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
)`, (err) => {
    if (err) {
        console.error('Error creating table:', err);
    } else {
        console.log('Users table ready');
    }
});

module.exports = db;