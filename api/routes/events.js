const router = require("express").Router();
const Event = require("../models/Event");



//CREATE EVENT
router.post("/", async (req,res) => {

	const newEvent = new Event(req.body);

	try {
		const savedEvent = await newEvent.save();

		return res.status(200).json(savedEvent);

	} catch(err) {

		return res.status(500).json(err)
	}
});


module.exports = router;