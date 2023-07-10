const express = require("express");
const mongoose = require("mongoose");
const dbConfig = require("./configs/db.config");




const app = express();
mongoose.connect(dbConfig.DB_URL);

const db = mongoose.connection;

db.on("error" ,()=>{
    console.log("error while connecting database")
} )

db.once("open" ,()=>{
    console.log("db is connected succesfullly")
} );


const serverConfig = require("./configs/server.config");


app.listen(serverConfig.PORT, ()=>{
    console.log(`Server is running on port ${serverConfig.PORT}`)
}) 