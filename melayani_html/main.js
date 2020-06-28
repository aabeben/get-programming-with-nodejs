"use strict";

const port = 3000,
	http = require("http"),
	statusHttp = require("http-status-codes"),
	fs = require("fs"),
	petaRute = {
		"/":"tampilan-tampilan/index.html",
	};
http.createServer((req, res)=>{
  res.writeHead(statusHttp.OK, {
	  "Content-Type":"text/html",
  });
	if(petaRute[req.url]){
		fs.readFile(petaRute[req.url], (err, data)=>{
			if(err) throw Error("Galat baca data");
		});
	}
});
