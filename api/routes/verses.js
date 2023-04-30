const router = require("express").Router();
const Verse = require("../models/Verse");



//CREATE VERSE
router.post("/", async (req,res) => {

	const newVerse = new Verse(req.body);

	try {
		const savedVerse = await newVerse.save();

		return res.status(200).json(savedVerse);

	} catch(err) {

		return res.status(500).json(err)
	}
});

// UPDATE VERSE
router.put("/:id", async (req, res) => {
	try {
		const verse = Verse.findById(req.params.id);
		if(verse.username === req.body.username) {
			try {
				const updatedVerse = await Verse.findByIdAndUpdate(
					re.params.body,
				{
					$set:req.body
				},
				{new:true}
				);
				return res.status(200).json(updatedVerse)
			}catch(err) {
				return res.status(500).json(err)
			}
		} else {
			return res.status(401).json("You can only update your Verse!")
		}
	}catch(err) {
		return res.status(500).json(err)
	}
})



// DELETE POST
router.delete("/:id", async (req, res) => {
	try {
		const verse = await Verse.findById(req.params.id);
		if (post.username === req.body.username) {
			try {
				await verse.delete();
				res.status(200).json("Verse has been deleted")
			} catch(err) {
				return res.status(500).json(err);
			}
		} else {
			return res.status(401).json("You can delete only your Verse!")
		}
	} catch(err) {
		return res.status(500).json(err)
	}
});

// GET POST
router.get("/:id", async (req, res) => {
	try {
		const verse = await Verse.findById(req.params.id);
		return res.status(200).json(verse);
	}catch (err) {
		return res.status(500).json(err);
	}
});

// GET ALL POSTS
router.get("/:id", async (req, res) => {
	const username = req.query.user;
	const catName = req.query.cat;

	try {
		let verses;
		if(username) {
			verses = await Verse.find ({username});
		} else if (catName) {
			verses = await Verse.find({
				categories: {
					$in:[catName],
				}
			})
		} else {
			verses = Verse.find();
		}
		return res.status(200).json(verses)
	} catch(err) {
		return res.status(500).json(err)
	}
});

module.exports = router;