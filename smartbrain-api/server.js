const express = require("express");
const bodyParser = require("body-parser");

const app = express();

app.use(bodyParser);

app.get("/", (req, res) => {
	res.send("This is working");
})

app.listen(3000, () => {
	console.log("App is running on port 3000");
});