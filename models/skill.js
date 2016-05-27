var mongoose = require('mongoose');

var skillSchema = new mongoose.Schema({
	name: String,
	tech: [String]	
});

module.exports = mongoose.model("Skill", skillSchema);