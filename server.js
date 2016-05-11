var mongoose = require("mongoose"),
	bodyParser = require("body-parser"),
	express = require("express"),
	app = express();

/*mongoose.connect("mongodb://localhost/testdb");*/

app.set("view engine", "ejs");
app.use(express.static("public"));
app.use(bodyParser.urlencoded({extended: true}));

app.get("/", function(req, res){
	res.render("index");
});

app.get("/about", function(req, res){
	res.render("about");
});

app.get("/portfolio", function(req, res){
	res.render("portfolio");
});

app.get("/contact", function(req, res){
	res.render("contact");
});

app.listen(3000, function(){
	console.log("Server Started")
});