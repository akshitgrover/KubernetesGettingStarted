const http = require("http");
const fs = require("fs");

const server = http.createServer();

server.on("request", (req, res)=>{

    data = fs.readFileSync("/etc/config/helloworld-fromLiteral");
    res.write(`fromLiteral: ${data}`);
    
    data = fs.readFileSync("/etc/config/helloworld-fromFile");
    res.write(`fromFile: ${data}`);
    
    res.end(data);

});

server.listen(process.env.CONTAINER_PORT || 3000, (err)=>{

    if(err){
        console.error(`Error listening on port: ${process.env.CONTAINER_PORT}`);
        process.exit(1);
    }
    console.log(`Listening on port: ${process.env.CONTAINER_PORT}`);

});