const http = require("http");
const app = require("./app.js");
const dotenv = require("dotenv");

dotenv.config();

const port = process.env.PORT;

const server = http.createServer(app);

server.listen(port);
