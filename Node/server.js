//Setting dependencies
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const mysql = require('mysql');
const PORT = 3000;

const app = express();

app.use(cors());

// parse requests of content-type - application/json
app.use(bodyParser.json());

// parse requests of content-type - application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }))

//Test connection from server response
app.get('/', function (req, res) { 
    res.json({ message: "Welcome to DrugStore application." });
})

//Console current server localhost port connection
app.listen(PORT, function () {
    console.log("Server running on localhost: " + PORT);
});

//Database creation and connection
let db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'root',
    database: 'drugStore'

});

module.exports = db;

db.connect(function (err) {
    if (err) throw err;
    console.log("Database Connected!");
});

//INSERT
app.post('/insert', function (req, res) { 
    let postBody = req.body;
    //Console on Server terminal the body request from client
    console.log(postBody);
    //SQL query to be executed
    let sql = "INSERT INTO drugTable SET ?";
    let postQuery = db.query(sql, postBody, (err, results) => {
        if (err) throw err;
        console.log('Registered!');
        //Message send to Client console as response for data received
       
        res.status(200).end(JSON.stringify(results.insertId));
    });
    

});

//SELECT
app.get('/retrieve', (req, res) => { 
    let sql = 'SELECT * FROM drugTable';
    let query = db.query(sql, (err, results) => {
        if (err) throw err;
        console.log(results);
        res.send(results);
    });

});

// DELETE - In progress....
app.post('/cancelation', function (req, res) { 
    let postBody = req.body;
    //Console on Server terminal the body request from client
    console.log(postBody);
    //SQL query to be executed
    let sql = "DELETE FROM drugTable WHERE id = ?";
    
    let postQuery = db.query(sql, postBody.user_name, (err, results) => {
        if (err) throw err;
        console.log('Cancelled!');
        //Message send to Client console as response for data received
       
        res.status(200).end(JSON.stringify(results.insertId));
        //let id = JSON.stringify(results.insertId);
        //console.log(id);

    });
});