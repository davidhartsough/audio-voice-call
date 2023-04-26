const http = require("http");
const fs = require("fs");
const path = require("path");
const { PeerServer } = require("peer");

// const peerServer =
PeerServer({ port: 9000, path: "/p", key: "peerjs" });

http
  .createServer((req, res) => {
    if (req.method === "GET") {
      console.log("req.url:", req.url);
      if (req.url === "/") {
        fs.readFile("./app/index.html", (err, data) => {
          if (!err) {
            res.statusCode = 200;
            res.setHeader("Content-Type", "text/html");
            res.write(data);
            res.end();
          } else {
            res.statusCode = 404;
            res.setHeader("Content-Type", "text/plain");
            res.write("Error 404: Not Found");
            res.end();
          }
        });
      } else if (req.url === "/app.js") {
        fs.readFile("./app/app.js", (err, data) => {
          if (!err) {
            res.statusCode = 200;
            res.setHeader("Content-Type", "text/javascript");
            res.write(data);
            res.end();
          } else {
            res.statusCode = 404;
            res.setHeader("Content-Type", "text/plain");
            res.write("Error 404: Not Found");
            res.end();
          }
        });
      } else if (req.url === "/favicon.ico") {
        fs.readFile("./app/favicon.ico", (err, data) => {
          if (!err) {
            res.statusCode = 200;
            res.setHeader("Content-Type", "image/x-icon");
            res.write(data);
            res.end();
          } else {
            res.statusCode = 404;
            res.setHeader("Content-Type", "text/plain");
            res.write("Error 404: Not Found");
            res.end();
          }
        });
      } else {
        res.statusCode = 404;
        res.setHeader("Content-Type", "text/plain");
        res.write("Error 404: Not Found");
        res.end();
      }
    }
  })
  .listen(5000);
