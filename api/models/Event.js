const mongoose = require("mongoose");

const EventSchema = new mongoose.Schema({
	title: {
		type:String,
		required:true,
	},
	content: {
		type:String,
		required:true,
	}
}
);

module.exports = mongoose.model("Event", EventSchema);