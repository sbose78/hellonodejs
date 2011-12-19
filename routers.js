
var resource=require("getfiles.js");

var handle = {}
handle["/"] = resource.source;
handle["/upload"] = resource.upload;



function route(pathname)
{
	var ans = handle[pathname]();
	return ans+'hi';
}

export.route=route;