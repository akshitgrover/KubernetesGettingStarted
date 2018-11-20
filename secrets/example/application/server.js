const http = require("http");
const fs = require("fs");

const server = http.createServer();

server.on("request", (req, res)=>{

    let message = "Secret: ";

    if(process.env.HELLOWORLD_SECRET){
        message += process.env.HELLOWORLD_SECRET;
        message += "<br/>"
        message += "Read from env var!";
    } else{
        message += fs.readFileSync("/var/secrets/helloworldSecret/content");
        message += "</br>"
        message += "Read from mounted volume!"
    }
    
    res.setHeader("Content-Type", "text/html");
    res.end(message);

});

server.listen(3000, (err)=>{

    if(err){
        console.error("Error listening on port 3000");
        process.exit(1);
    }
    console.log("Listening on port 3000");

});