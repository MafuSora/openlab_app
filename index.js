var express = require("express")
var app = express()
// var db = require("./database.js")
const cors = require('cors')

var bodyParser = require("body-parser");
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use(cors());

// Server port
var HTTP_PORT = process.env.PORT || 4000 
// Start server

// Root endpoint
app.get("/", (req, res, next) => {
    res.json({"message":"Ok"})
});

app.listen(HTTP_PORT, () => {
    console.log("Server running on port %PORT%".replace("%PORT%",HTTP_PORT))
});