"use strict";
const port = 3000,
	http = require("http"),
	statusHttp = require("http-status-codes"),
	app = http.createServer();

app.on("request", (req, res)=>{
	res.writeHead(statusHttp.OK,{
	  "Content-Type":"text/html",
	});
	let pesanTanggapan = "<h1>Ini akan tampil pada layar.</h1>";
});// app.on method ends.

app.listen(port);
console.log(`Server telah dimulai dan sedang mendengarkan pada port ${port}`);
