const http = require("http");

const server = http.createServer();

server.on("request", (req,res)=>{

    res.write("Hello World");
    res.end();

});

server.listen(3000, (err)=>{

    if(err){
        console.error("Error listening on port 3000");
    }
    console.error("Listening on port 3000");

});