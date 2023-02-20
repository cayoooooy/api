//REST API demo in Node.js
var express = require('express'); // requre the express framework
var app = express();
var fs = require('fs'); //require file system object
const cors = require('cors')
app.use(cors())

// Endpoint to Get a list of users
app.get('/getTour', function(req, res){
    fs.readFile(__dirname + "/" + "tourist.json", 'utf8', function(err, data){
        console.log(data);
        res.send(data); // you can also use res.send()
    });
})
app.get('/keyword', function(req, res){
    fs.readFile(__dirname + "/" + "tourist.json", 'utf8', function(err, data){
       
    data = JSON.parse(data)
    console.log(data.tour)
       const result = data.tour.filter(function(obj) {
            return obj['tourname'].toLowerCase().includes(req.query.i.toLowerCase());
        });
     
        console.log(result);
        res.send(result); // you can also use res.send()
    });
})


// Create a server to listen at port 8080
var server = app.listen(8080, function(){
    var host = server.address().address
    var port = server.address().port
    console.log("REST API demo app listening at http://%s:%s", host, port)
})