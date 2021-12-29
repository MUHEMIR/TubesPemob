const express = require('express');
const app = express();
const mysql = require('mysql');
const port = 3000;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
// koneksi ke database
const db = mysql.createConnection({
host: 'localhost',
user: 'root',
password: '',
database: 'socialmedia',
});

// menjalankan SQL - table posts
// create
app.post('/posts',(req, res) => {
let sql = "INSERT INTO social_media SET post_date=NOW()"+", username='"+req.body.username+"', post='"+req.body.post+"'";

db.query(sql, (err, results) => {
    if(err) throw err;
    res.json({"status": 200,
    "message": "data berhasil disimpan","data":null});
});
});

// retrieve all data
app.get('/posts',(req, res) => {
let sql = "SELECT post_id, username, post, DATE_FORMAT(post_date, '%W %D %M %Y %H:%i') as post_date FROM social_media";
db.query(sql, (err, results) => {
if(err) throw err;
res.json({"status": 200,
"message": "data berhasil diambil",
"data":results});
});
});


// retrieve a record by post_id
app.get('/posts/id/:id',(req, res) => {
let sql = "SELECT post_id, username, post, DATE_FORMAT(post_date, '%W %D %M %Y %H:%i') as post_date FROM social_media WHERE post_id='"+req.params.id+"'";
db.query(sql, (err, results) => {
if(err) throw err;
res.json({"status": 200,"message": "data berhasil diambil","data":results});
});
});


// retrieve records by username
app.get('/posts/username/:username',(req, res) => {
let sql = "SELECT post_id, username, post, DATE_FORMAT(post_date, '%W %D %M %Y %H:%i') as post_date FROM social_media WHERE username='"+req.params.username+"'";
db.query(sql, (err, results) => {
if(err) throw err;
res.json({"status": 200,
"message": "data berhasil diambil",
"data":results});
});
});

// update
app.put('/posts/id/:id',(req, res) => {
let sql = "UPDATE social_media SET post='"+req.body.post+"' "+"WHERE post_id='"+req.params.id+"'";
db.query(sql, (err, results) => {
if(err) throw err;
res.json({"status": 200,
"message": "data berhasil diupdate",
"data":null});
});
});

// delete
app.delete('/posts/id/:id',(req, res) => {
let sql = "DELETE FROM social_media WHERE post_id='"+req.params.id+"'";
db.query(sql, (err, results) => {
if(err) throw err;
res.json({"status": 200,
"message": "data berhasil dihapus",
"data":null});
});
});

app.use('/images', express.static('images'));

app.listen(port, () => {
console.log(`cli-nodejs-api listening at http://localhost:${port}`)
});