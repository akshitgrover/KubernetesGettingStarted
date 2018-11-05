const http = require("http");

const server = http.createServer();

server.on("request", (req,res)=>{
    res.end(process.env.MESSAGE || "No Message Specified by ENV");
});

server.listen(process.env.PORT || 3000)