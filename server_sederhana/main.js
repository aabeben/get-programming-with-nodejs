"use strict";

const port = 3000,
	http = require("http"),
	statusHttp = require("http-status-codes"),
	app = http.createServer((req, res)=>{
		console.log("Telah diterima permintaan yang datang!");
		res.writeHead(statusHttp.OK,{
			"Content-Type":"text/html",
		});
		let pesanTanggapan = "<h1>Salam, jagad raya!</h1>";
		res.write(pesanTanggapan);
		res.end();
		console.log(`Tanggapan telah terkirim : ${pesanTanggapan}`);
	});
app.listen(port, ()=> console.log(`Server telah dimulai dan mendengarkan pada nomor port: ${port}`));
