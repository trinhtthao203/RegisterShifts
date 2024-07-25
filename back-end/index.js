const express = require("express");
const mysql = require("mysql");
const cors = require("cors");
require("dotenv").config();
const app = express();
app.use(cors());

const db = mysql.createConnection({
    host: process.env.HOST,
    user: process.env.USER_NAME,
    password: process.env.PASS_WORD,
    port: process.env.DB_PORT,
    database: process.env.DATA_BASE,
});

app.get("/", (req, res) => {
    res.json("From BE side");
});

console.log(process.env.DB_PORT);

app.get("/users", (req, res) => {
    const sql = "SELECT * FROM users";
    db.query(sql, (err, data) => {
        if (err) return res.json(err);
        return res.json(data);
    });
});

app.listen(4000, () => {
    console.log("listening port 4000...");
});
