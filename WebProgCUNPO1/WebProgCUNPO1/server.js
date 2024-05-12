const PORT = 3000;
const cors = require('cors');
const path = require('path');
const bodyParser = require("body-parser");
const express = require('express');
const app = express();
const root = `http://localhost:${PORT}`;

app.use(bodyParser.json());
app.use(express.json());
app.use(cors());
app.use(express.static('public'));

app.listen(PORT, () => {
  //success
});

app.get('/', (req, res) => {
  res.status(200).sendFile(path.join(__dirname + '/public' , '/landingpage.html'));
});

app.get('/home', (req, res) => {
    res.status(200).sendFile(path.join(__dirname + '/public' , '/landingpage.html'));
});

app.get('/introduction', (req, res) => {
  res.status(200).sendFile(path.join(__dirname + '/public' , '/html/introduction.html'));
});

app.get('/algorithms', (req, res) => {
  res.status(200).sendFile(path.join(__dirname + '/public' , '/html/algorithms.html'));
});

app.get('/algorithms_table', (req, res) => {
  res.status(200).sendFile(path.join(__dirname + '/public' , '/html/algorithms_table.html'));
});

app.get('/forms', (req, res) => {
  res.status(200).sendFile(path.join(__dirname + '/public' , '/html/forms.html'));
});