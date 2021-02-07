var express = require("express");
var app = express();
app.set("view engine", "ejs");
app.use(express.static(__dirname + "/public"));

app.get("/", function(req,res){
	res.render("surprise.ejs");
});

app.get("/ToMyLove", function(req,res){
	res.render("ToMyLove.ejs");
});

app.get("/not", function(req,res){
	res.render("not.ejs");
});


const port = process.env.PORT || 3000;


app.listen(3000, process.env.IP, function(server){
	console.log("server starting");
});