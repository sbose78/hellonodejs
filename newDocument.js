var http=require('http');

var options = {
  host: 'sbose78.iriscouch.com',
  path: '/bosedb1',
  method: 'POST',
  //accept:'application/json',
  //Content-Type:'application/json',
  headers:{
	'Content-Type':'application/json',
	'accept':'application/json'
   }
 };

var data={
   'servings' : 4,
   'subtitle' : "Delicious with fresh bread",
   'title' : "Fish Stew------"
};

var req = http.request(options, function(res) {
   console.log('STATUS: ' + res.statusCode);
   console.log('HEADERS: ' + JSON.stringify(res.headers));
  // res.setEncoding('utf-8');
   //res.setHeader("Content-Type", "text/plain;charset=utf-8");
   //text/plain;charset=utf-8

   var body="";

   res.on('data', function (chunk) {
 	   body+=chunk;
         console.log('BODY(inside listener):\n ' + body);
	 
   }); 

  console.log('BODY (outside listener): ' + body);
 // var mydata=JSON.parse(body);
});


req.on('error', function(e) {
  console.log('problem with request: ' + e.message);
});



 //write data to request body
req.write(JSON.stringify(data));
req.end();