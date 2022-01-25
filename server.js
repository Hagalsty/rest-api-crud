const http = require("http");

const server = http.createServer();

server.listen(process.env || 3000);
