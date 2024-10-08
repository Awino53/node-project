const express = require("express") //import in es6

const server = express()

const mysql      = require('mysql');
const connection = mysql.createConnection({
  host     : 'localhost',
  user     : 'root',
  password : '',
  database :'carservice'
});


// callback hell

server.get("/", (req,res)=>{
    console.log("home/root/index/landing route");
    res.send("Welcome to my home page");
    
})
server.get("/vehicles",(req,res)=>{
    connection.query("SELECT * FROM vehicles", (err,vehicles)=>{
        if(!err){
            console.log(vehicles);
            res.render("vehicles.ejs",{vehicles});
        }else{
            console.log(err);
            res.status(500).send("Error");
        }
    })

})
server.get("/mechanics",(req,res)=>{
    connection.query("SELECT * FROM mechanics", (err,mechanics)=>{
        if(!err){
            console.log(mechanics);
            res.render("mechanics.ejs",{mechanics});
        }else{
            console.log(err);
            res.status(500).send("Error");
        }
    })

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

//http
//authentication and authorization