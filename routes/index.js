var express = require("express");
	router = express.Router();

//Get route for homepage
router.get("/", function(req, res){
	res.render("index");
});

//Get route for about page
router.get("/about", function(req, res){
	res.render("about");
});

//Get route for portfolio
router.get("/portfolio", function(req, res){
	res.render("portfolio");
});

//Get route for contact
router.get("/contact", function(req, res){
	res.render("contact");
});

module.exports = router;