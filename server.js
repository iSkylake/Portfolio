var mongoose = require("mongoose"),
	bodyParser = require("body-parser"),
	express = require("express"),
	app = express();

var indexRoutes = require("./routes/index");

/*mongoose.connect("mongodb://localhost/testdb");*/

app.set("view engine", "ejs");
app.use(express.static("public"));
app.use(bodyParser.urlencoded({extended: true}));

app.use(indexRoutes);

app.listen(process.env.PORT || 3000, function(){
	console.log("Server Started")
});