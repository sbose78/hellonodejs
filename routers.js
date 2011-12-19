
var resource=require("./getfiles");

var handle = {}
handle["/"] = resource.source;
handle["/upload"] = resource.upload;



function route(pathname)
{
	//var ans = handle[pathname]();
	return 'hi';
}

exports.route=route;