const http = require("http");

const server = http.createServer();

server.on("request", (req, res)=>{

    res.end("Hello World::Ingress (Single Service))");

});

server.listen(3000, (err)=>{

    if(err){
        console.error("Error listening on port 3000");
        process.exit(1);
    }
    console.log("Listening on port 3000");

});