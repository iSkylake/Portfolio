var mongoose = require("mongoose"),
	express = require("express"),
	app = express();

//Routes
var indexRoutes = require("./routes/index");

//Connect to database (deply || local)
mongoose.connect(process.env.DATABASEURL || "mongodb://localhost/portfolio");

app.set("view engine", "ejs"); //Looks for ejs files
app.use(express.static("public")); //Serve for static files

app.use(indexRoutes);

app.listen(process.env.PORT || 3000, function(){
	console.log("Server Started")
});