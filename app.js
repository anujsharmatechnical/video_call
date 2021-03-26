let express = require("express");
let app = express();
let server = require("http").Server(app);
let io = require("socket.io")(server);
//writing stream file is pending
let stream = require("./ws/stream");
let path = require("path");

//assests is pending for now

app.get("/", (req, res) => {
  res.sendFile(__dirname + "/index.html");
});

// io.off("/stream").on("connection", stream);

server.listen(3000);
