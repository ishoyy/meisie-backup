// routes/waitlist.js - Handles waitlist form submissions
const express = require('express');
const router = express.Router();
const db = require('../db');

router.post('/', (req, res) => {
    const { name, email, occupation, message } = req.body;
    
    // Validate required fields
    if (!name || !email || !occupation || !message) {
        return res.status(400).json({ 
            success: false, 
            error: 'All fields are required' 
        });
    }
    
    // Insert into database
    
    const query = `INSERT INTO users (name, email, occupation, message) VALUES (?, ?, ?, ?)`;

    db.run(query, [name, email, occupation, message], function(err) {
        if (err) {
            console.error('Database error:', err);
            return res.status(500).json({ 
                success: false, 
                error: 'Database error' 
            });
        }
        
        // Success
        res.status(200).json({ 
            success: true, 
            message: 'Successfully added to waitlist',
            id: this.lastID 
        });
    });
});

// Optional: Get all waitlist users (for admin dashboard)
router.get('/', (req, res) => {
    db.all('SELECT * FROM users ORDER BY id DESC', [], (err, rows) => {
        if (err) {
            return res.status(500).json({ 
                success: false, 
                error: err.message 
            });
        }
        res.json({ 
            success: true, 
            data: rows 
        });
    });
});

module.exports = router;