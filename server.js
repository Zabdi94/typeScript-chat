const express = require("express");
const { listen } = require("socket.io");
var app = express();
const server = require("http").createServer(app);
const io = require("socket.io")(server);
users = [];
connections = [];
server.listen(3000);
app.get("/", function (req, res) {
  res.sendFile(__dirname + "/index.html");
});
io.sockets.on("connection", function (socket) {
  // when clients connects to server
  connections.push(socket); // add plug details to custom arrays
  console.log("connected: %s socket connected", connections.length);
  socket.on("disconnect", function (data) {
    connections.splice(connections.indexOf(socket), 1); // delete plug details
    console.log("disconnected : %s socket connected", connections.length);
  });
  socket.on("send message", function (data) {
    console.log(data);
    io.sockets.emit("new message", { msg: data });
  });
});
console.log("server is listening");
