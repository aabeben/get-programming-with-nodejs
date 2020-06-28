"use strict";
const getJSONString = obj => JSON.stringify(obj, null, 2);
const port = 3000,
	http = require("http"),
	statusHttp = require("http-status-codes"),
	app = http.createServer();

app.on("request", (req, res)=>{
	var badan = [];
	req.on("data",(dataBadan)=> badan.push(dataBadan));
	req.on("end",()=>{
		badan = Buffer.concat(badan).toString();
		console.log(`Isi-isi dari badan permintaan: ${badan}`);
	});
	res.writeHead(statusHttp.OK,{
	  "Content-Type":"text/html",
	});
	console.log(`Method: ${getJSONString(req.method)}`);
	console.log(`URL: ${getJSONString(req.url)}`);
	console.log(`Headers: ${getJSONString(req.headers)}`);
	let pesanTanggapan = "<h1>Ini akan tampil pada layar.</h1>";
	res.end(pesanTanggapan);
});// app.on method ends.

app.listen(port);
console.log(`Server telah dimulai dan sedang mendengarkan pada port ${port}`);
