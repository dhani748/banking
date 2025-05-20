// server.js
const express = require('express');
const mysql = require('mysql');
const app = express();

const db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'course_db'
});

db.connect((err) => {
    if (err) throw err;
    console.log("MySQL Connected");
});

app.get('/courses', (req, res) => {
    let sql = "SELECT * FROM courses";
    db.query(sql, (err, results) => {
        if (err) throw err;
        res.json(results);
    });
});

app.listen(3000, () => {
    console.log("Server running on port 3000");
});