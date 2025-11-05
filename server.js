const http = require("http");
const fs = require("fs");
const path = require("path");

const PORT = 4000;

const server = http.createServer((req, res) => {
    console.log("Request URL:", req.url);

    let filePath = "";

    if (req.url === "/") {
        filePath = path.join(__dirname, "public", "home.html");
    } else if (req.url === "/about") {
        filePath = path.join(__dirname, "public", "about.html");
    } else if (req.url === "/contact") {
        filePath = path.join(__dirname, "public", "contact.html");
    } else {
        filePath = path.join(__dirname, "public", req.url)
    }

    const extname = path.extname(filePath);
    let contentType = 'text/html';
    switch (extname) {
        case ".css":
            contentType = 'text/css';
            break;
        case '.png':
            contentType = 'image/png';
            break;
        case '.jpg':
            contentType = 'image/jpg';
            break;

    }

    fs.readFile(filePath, (err, content) => {
        if (err) {
            // Error No entry  which signifies that "no such file or directory" exists at the specified path.
            if (err = "ENOENT") {
                let NotfoundPage = path.join(__dirname, "public", "404.html")
                fs.readFile(NotfoundPage, (err, data) => {
                    if (err) {
                        res.writeHead(404, { "Content-Type": "text/html" })
                        res.write(`<h1> Page not found </h1>`)
                        res.end();
                    } else {
                        res.writeHead(404, { "Content-Type": "text/html" })
                        res.write(data);
                        res.end();
                    }
                })
            }
            
        } else {
            res.writeHead(200, { "Content-Type": contentType });
            res.end(content);
        }
    });


});

server.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}`);
});

