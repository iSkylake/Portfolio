var mongoose = require("mongoose"),
	bodyParser = require("body-parser"),
	express = require("express"),
	app = express();

//Routes
var indexRoutes = require("./routes/index");

/*mongoose.connect("mongodb://localhost/testdb");*/

app.set("view engine", "ejs"); //Looks for ejs files
app.use(express.static("public")); //Serve for static files
app.use(bodyParser.urlencoded({extended: true})); //Parse the body content

app.use(indexRoutes);

app.listen(process.env.PORT || 3000, function(){
	console.log("Server Started")
});