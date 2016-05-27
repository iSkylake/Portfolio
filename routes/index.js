var express = require("express"),
	Portfolio = require('../models/portfolio.js'),
	Skill = require('../models/skill.js'),
	Project = require('../models/project.js'),
	router = express.Router();

//Get route for homepage
router.get("/", function(req, res){
	res.render("index");
});

//Get route for about page
router.get("/about", function(req, res){
	Skill.find({}, function(err, skill){
		if(err){
			console.log(err);
		} else{
			res.render("about", {skills: skill});
		}
	});
});

//Get route for portfolio
router.get("/portfolio", function(req, res){
	Portfolio.find({}).populate("projects").exec(function(err, portfolio){
		if(err){
			console.log(err);
		} else{
			res.render("portfolio", {portfolio:portfolio});
		}
	});
});

//Get route for contact
router.get("/contact", function(req, res){
	res.render("contact");
});

module.exports = router;