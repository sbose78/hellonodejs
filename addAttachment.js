var http=require('http');

var options = {
  host: 'sbose78.iriscouch.com',
  path: '/bosedb1/62a26d763b23fc30fcd46cec9d001426/attachment?rev=1-3a85e8357b5efc4e5cbccc6e45939226',
  method: 'PUT',
  //accept:'application/json',
  //Content-Type:'application/json',
  headers:{
	'Content-Type':'text/plain',
	'Content-Length':'10'
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
req.write('hi shoubhik');
req.end();