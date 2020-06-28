"use strict";
const petaRuteTanggapan = {
	"/info":"<h1>Halaman Info</h1>",
	"/kontak":"<h1>Halaman Kontak</h1>",
	"/tentang":"<h1>Halaman Tentang Kami</h1>",
	"/salam":"<h1>Halaman Salam</h1>",
	"/galat":"<h1>Maaf halaman yang anda cari tidak ada di sini.</h1>",
};
const port = 3000,
	http = require("http"),
	statusHttp = require("http-status-codes"),
	app = http.createServer((req, res)=>{
		res.writeHead(200, {
			"Content-Type":"text/html",
		});
		if(petaRuteTanggapan[req.url]){
			res.end(petaRuteTanggapan[req.url]);
		} else {
			res.end("<h1>Selamat Datang!</h1>");
		}
	});
app.listen(port, ()=> console.log(`Server telah dimulai dan mendengarkan pada port: ${port}`));
