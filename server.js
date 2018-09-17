var express = require('express');
var app = express();
var path = require('path');
var HTTP_PORT = process.env.PORT || 8080;


app.use(express.static('public'));


function onhttpstart() {
    console.log("I'm listening on " + HTTP_PORT);
}

app.get('/', function(req, res){
    res.sendFile(path.join(__dirname, "index.html"));
});


app.listen(HTTP_PORT, onhttpstart);
