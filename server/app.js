require('dotenv').config();
const express = require("express");
const bodyParser = require("body-parser");
const ejs = require("ejs");
const mongoose = require("mongoose");

const app = express();
app.use(express.static("public"));
app.set('view engine', 'ejs');
app.use(express.json());
// app.use(bodyParser.urlencoded({
//   extended: true
// }));

app.post("/data", async function(req, res){
  const info = await req.body;

  try{
    console.log(info.title);
    console.log(info.content);
    res.status(201).json({message: "Successfully received"});
  }
  catch(err){
    console.log(err);
  }
    
  });

app.listen(5000, function() {
  console.log("Server started on port 5000.");
});  