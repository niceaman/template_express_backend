require("dotenv").config();
const server = require("./app");
const port = process.env.PORT || 8000;
const { Server } = require("socket.io");

server.listen(port, () => console.log("server running on port " + port));
