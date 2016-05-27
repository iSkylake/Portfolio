var mongoose = require('mongoose');

var portfolioSchema = new mongoose.Schema({
	name: String,
	projects: [
		{
			type: mongoose.Schema.Types.ObjectId,
			ref: "Project"
		}
	]
});

module.exports = mongoose.model("Portfolio", portfolioSchema);