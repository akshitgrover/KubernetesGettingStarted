const http = require("http");

const server = http.createServer();

server.on("request", (req, res)=>{

    res.statusCode = 200;
    res.end("Hello World | HealthCheck Example");

});

server.listen(process.env.PORT || 3000, (err)=>{

    if(err){
        console.error(`Error listening on port ${process.env.PORT || 3000}`);
        process.exit(1);
    }
    console.log(`Listening on port ${process.env.PORT || 3000}`);

});