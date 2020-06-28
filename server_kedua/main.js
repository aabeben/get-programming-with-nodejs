"use strict";
const port = 3000,
	http = require("http"),
	statusHttp = require("http-status-codes"),
	app = http.createServer();

app.on("request", (req, res)=>{
	res.writeHead(statusHttp.OK,{
	  "Content-Type":"text/html",
	});
	console.log(req.method);
	console.log(req.url);
	console.log(req.headers);
	let pesanTanggapan = "<h1>Ini akan tampil pada layar.</h1>";
	res.end(pesanTanggapan);
});// app.on method ends.

app.listen(port);
console.log(`Server telah dimulai dan sedang mendengarkan pada port ${port}`);
