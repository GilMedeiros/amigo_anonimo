const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const passport = require("passport");
const { default: mongoose } = require("mongoose");
const localStrategy = require("passport-local").Strategy;

//Config
app.set('view engine','ejs');
app.use(express.json());
app.use(express.static("public"));
app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json());

//Mongoose Config
mongoose.connect("mongodb://localhost:27017/aadb",{useNewUrlParser:true, useUnifiedTopology:true})

app.listen(80, ()=>{console.log("Server ON")})