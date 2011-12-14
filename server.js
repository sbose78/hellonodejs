
var http = require('http'), sys = require('util'),      fs = require('fs'),    index;


fs.readFile('./hi.html', function (err, data) {
    if (err) {
        throw err;
    }
    index = data;
});
 
 
var server = http.createServer(function (req, res) {
  res.writeHead(200, { "Content-Type": "text/html" });
     res.write(index);
  res.end();
});
 
server.listen(process.env.PORT || 8001);