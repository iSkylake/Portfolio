var mongoose = require('mongoose');

var projectSchema = new mongoose.Schema({
	title: String,
	image: String,
	description: String,
	github: String
});

module.exports = mongoose.model("Project", projectSchema);