const express = require("express") //import in es6

const server = express()

server.get("/", (req,res)=>{
    console.log("home/root/index/landing route");
    res.send("Welcome to my home page");
    
})
server.get("/about", (req, res)=>{
    console.log("about page/route/path/URI");
    res.send("Welcome to my about page");
    
})
//other routes/paths/URIs
server.get("*", (req, res)=>{
    console.log("unidentified route");
    console.log("404 not found/page not found");
})
server.listen(3000, () => console.log("starting server on PORT 3000"))