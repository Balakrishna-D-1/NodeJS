const http = require('http');
const fs = require('fs');


http.createServer((req, res) => {
    res.writeHead(200, { 'Content-Type' : 'text/html'});
    if(req.url === '/home' || req.url === '/') {
        let data = fs.readFileSync('Static/index.html');
        res.write(data);
    }
        else if(req.url === '/about') {
            let data = fs.readFileSync('Static/about.html');
        res.write(data);
        }
      else  if(req.url === '/login' || req.url === '/') {
            let data = fs.readFileSync('Static/login-page.html');
            res.write(data);
        }
        else if(req.url === '/Register') {
            let data = fs.readFileSync('Static/Register.html');
        res.write(data);
        }
        else if(req.url === '/product') {
            let data = fs.readFileSync('Static/product.html');
        res.write(data);
        }
        else if(req.url === '/contact') {
            let data = fs.readFileSync('Static/contact.html');
        res.write(data);
        }
        else if(req.url === '/forgot') {
            let data = fs.readFileSync('Static/forgot.html');
        res.write(data);
        }

        else {
            let data =  fs.readFileSync('Static/error.html');
            res.write(data);
        }
    
res.end();
}).listen(process.env.PORT, () => {
    console.log("server started port 8080");
});