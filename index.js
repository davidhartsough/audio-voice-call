// const http = require("http");
// const fs = require("fs");
const { PeerServer } = require("peer");

// const peerServer =
PeerServer({ port: 9000, path: "/p", key: "peerjs" });

// http
//   .createServer((req, res) => {
//     res.statusCode = 200;
//     res.setHeader("Content-Type", "text/html");
//     fs.createReadStream(filepath).pipe(res);
//   })
//   .listen(3000);
