const bodyParser = require('body-parser');
const express = require('express');

const app = express();
app.listen(3001);

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.get ('/', (req, res) => {
	res.send("Home");
	console.log(req);
});

app.get ('/profile', (req, res) => {
	res.send("profile")
});

app.post ('/user', (req, res) => {
	console.log(req.body);
	res.send({
		username: 'raboyd',
		password: 'secret'
	})
});