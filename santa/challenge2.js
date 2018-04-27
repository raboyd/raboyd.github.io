// part 1

// const fs = require("fs");

// fs.readFile("./challenge2-input.txt", (err, data) => {

// 	// l = 0, w = 1, h = 2
// 	// 2*l*w + 2*w*h + 2*h*l
	
// 	let wrapRequired = 0;
// 	let dimensions = "";
// 	let dimensionArray = [];

// 	if (err) {
// 		console.log(err);
// 	} else {
// 		dimensions = data.toString().trim();
// 	}

// 	dimensionArray = dimensions.split("\n").map(dimension => {
// 	 	return dimension.split('x').map(Number);
// 	});

// 	wrapRequired = dimensionArray.reduce((a, d) => {
// 		let min = 2*d[0]*d[1] + 2*d[1]*d[2] + 2*d[2]*d[0];
// 		d.sort((a, b) => a - b)
// 		let extra = d[0] * d[1];
// 		return a += min + extra;
// 	}, 0);

// 	console.log(wrapRequired);

// });

// part 2

const fs = require("fs");

fs.readFile("./challenge2-input.txt", (err, data) => {

	// l = 0, w = 1, h = 2
	
	let ribbonRequired = 0;
	let dimensions = "";
	let dimensionArray = [];

	if (err) {
		console.log(err);
	} else {
		dimensions = data.toString().trim();
	}

	dimensionArray = dimensions.split("\n").map(dimension => {
	 	return dimension.split('x').map(Number);
	});

	ribbonRequired = dimensionArray.reduce((a, d) => {
		d.sort((a, b) => a - b)
		let min = (2 * d[0]) + (2 * d[1]);
		let extra = d[0] * d[1] * d[2];
		return a += min + extra;
	}, 0);

	console.log(ribbonRequired);

});