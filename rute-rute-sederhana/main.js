"use strict";
const port = 3000,
	http = require("http"),
	statusHttp = require("http-status-codes"),
        petaRuteTanggapan = {
	"/info":"<h1>Halaman Info</h1>",
	"/kontak":"<h1>Halaman Kontak</h1>",
	"/tentang":"<h1>Pelajari lebih lanjut tentang kami.</h1>",
	"/salam":"<h1>Katakan salam dengan mengirimi surel <a href=\"mailto:bhasanudin@gmail.com\">di sini</a></h1>",
	"/galat":`${statusHttp.NOT_FOUND} Maaf halaman yang anda cari tidak ada di sini`,
},

	app = http.createServer((req, res)=>{
		if(petaRuteTanggapan[req.url]){
			if(req.url === "/galat"){
				res.writeHead(404, {
				  "Content-Type":"text",
				});
			} else {
				res.writeHead(200, {
					"Content-Type":"text/html",
				});

			}
			res.end(petaRuteTanggapan[req.url]);
			
		} else {
			res.end("<h1>Selamat Datang!</h1>");
		}
	});
app.listen(port, ()=> console.log(`Server telah dimulai dan mendengarkan pada port: ${port}`));
