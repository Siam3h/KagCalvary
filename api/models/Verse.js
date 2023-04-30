const mongoose = require("mongoose");

const VerseSchema = new mongoose.Schema({
	title: {
		type:String,
		required:true,
	},
	content: {
		type:String,
		required:true,
	},
	book: {
		type:String,
		required:true,
	},
	chapter: {
		type:Number,
		required:true,
	},
	verse: {
		type:Number,
		required:true,
	}
}
);

module.exports = mongoose.model("Verse", VerseSchema);