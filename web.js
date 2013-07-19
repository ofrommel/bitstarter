var express = require('express');
var fs = require('fs');

var app = express.createServer(express.logger());


app.get('/', function(request, response) {
  data = fs.readFileSync("index.html", "utf8");
  response.send(data);
});

app.get('/bootstrap/*', function(req, res){
    path = req.params[0];
    res.sendfile('./bootstrap/' + path);
});

app.get('/images/*', function(req, res){
    path = req.params[0];
    res.sendfile('./images/' + path);
});

app.get('/font-awesome/*', function(req, res){
    path = req.params[0];
    res.sendfile('./font-awesome/' + path);
});


/*app.get('/bootstrap.css', function(request, response) {
  data = fs.readFileSync("bootstrap.css", "utf8");
  response.send(data);
});

app.get('/bootstrap-responsive.css', function(request, response) {
  data = fs.readFileSync("bootstrap-responsive.css", "utf8");
  response.send(data);
});

app.get('/bootstrap.js', function(request, response) {
  data = fs.readFileSync("bootstrap.js", "utf8");
  response.send(data);
});
*/
var port = process.env.PORT || 8080;
app.listen(port, function() {
  console.log("Listening on " + port);
});
