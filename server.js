const express = require("express");
const { listen } = require("socket.io");
var app = express();
const server = require("http").createServer(app);
const io = require("socket.io")(server);
users = [];
