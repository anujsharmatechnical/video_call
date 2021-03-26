let express = require("express");
let app = express();
let server = require("http").Server(app);
let io = require("socket.io")(server);
//writing stream file is pending
let stream = require("./ws/stream");
let path = require("path");
// let favicon = require("serve-favicon");

//assests is pending for now

app.use("/js", express.static(path.join(__dirname, "js")));

app.get("/", (req, res) => {
  res.sendFile(__dirname + "/index.html");
});

// io.off("/stream").on("connection", stream);
//after git mistake
server.listen(3000);
