const express = require("express");
const bodyParser = require("body-parser");

const SchemeRouter = require("./schemes/scheme-router.js");

const server = express();

server.use(bodyParser.json());
server.use("/api/schemes", SchemeRouter);

module.exports = server;
