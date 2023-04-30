const express = require("express");
const app = express();
const dotenv = require("dotenv");
const mongoose = require("mongoose");
const authRoute = require("./routes/auth");
const userRoute = require("./routes/users");
const postRoute = require("./routes/posts");
const categoryRoute = require("./routes/categories");
const eventRoute = require("./routes/events");
const multer = require("multer");
const path = require("path");
const cors = require('cors');

dotenv.config();
app.use(express.json());
app.use("/images", express.static(path.join(__dirname, "/images")))

mongoose.connect(process.env.MONGO_URL, {
	useNewUrlParser: true,
	useUnifiedTopology: true,
}).then(console.log("Connected to MongoDB")).catch((err) => console.log(err));


const storage = multer.diskStorage({
	destination: (req, file, cb) => {
		cb(null, "images");
	},
	filename: (req, file, cb) => {
		cb(null, req.body.name);
	}
});


//UPLOAD IMAGES
const upload = multer({ storage: storage });
app.post("/api/upload", upload.single("file"), (req, res) => {
	return res.status(200).json("File has been uploaded!")
});

const corsOptions = {
	origin: 'http://localhost:3000',
	credentials: true,            //access-control-allow-credentials:true
	optionSuccessStatus: 200
}
app.use(cors(corsOptions));



//MIDDLEWARE
app.use("/api/auth", authRoute);
app.use("/api/users", userRoute);
app.use("/api/posts", postRoute);
app.use("/api/categories", categoryRoute);
app.use("/api/events", eventRoute);





app.listen("5000", () => {
	console.log('Application Running Successful on port: 5000')
});