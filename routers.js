
var resource=require("getfiles.js");

var handle = {}
handle["/"] = resource.source;
handle["/upload"] = resource.upload;



function route(pathname)
{
	handle[pathname]();
}

export.route=route;