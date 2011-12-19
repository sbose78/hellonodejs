
var url = require("url");
var routers=require("./routers");
var http = require('http'), sys = require('util'),      fs = require('fs'),    index;


/*
fs.readFile('./hi.html', function (err, data) {
    if (err) {
        throw err;
    }
    index = data;
});
 */
 
var server = http.createServer(function (req, res) {

	var pathname = url.parse(req.url).pathname;
     res.writeHead(200, { "Content-Type": "text/html" });
     //res.write(index);
	 var ans= routers.route(pathname);
	  res.write("Request for " + pathname + " received.----" +ans +"something"); 
     res.end();
});
 
server.listen(process.env.PORT || 8001);