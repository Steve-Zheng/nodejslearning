const http = require('http');
const url = require('url');
const fs = require('fs');
http.createServer(function (req, res) {
    let q = url.parse(req.url,true);
    let filename = "./html_files"+q.pathname;
    if(filename === "./html_files/") {
        filename = "./html_files/index.html"
    }
    console.log(filename);
    fs.readFile(filename, function(err, data) {
        if(err) {
            fs.readFile("./html_files/404.html",function (err,data) {
                res.writeHead(404,{'Content-Type': 'text/html'});
                res.write(data);
                return res.end();
            });
        }
        else {
            res.writeHead(200, {'Content-Type': 'text/html'});
            res.write(data);
            return res.end();
        }

    });
}).listen(8080);