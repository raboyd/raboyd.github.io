// part 1

// const fs = require("fs");
// const naughtyStrings = ["ab", "cd", "pq", "xy"];
// const doubleLetters = ["aa","bb","cc","dd","ee","ff","gg","hh","ii","jj","kk","ll","mm","nn","oo","pp","qq","rr","ss","tt","uu","vv","ww","xx","yy","zz"];
// let words = []
// let niceWords = 0;
// let naughtyWords = 0;

// fs.readFile("./challenge5-input.txt", (err, data) => {

// 	if (err) {
// 		console.log(err);
// 	} else {
// 		words = data.toString().trim().split("\n");
// 	}

// 	wordloop:
// 	for (word of words) {

// 		// check for banned strings
// 		naughtyloop:
// 		for (naughty of naughtyStrings) {
// 			if (word.indexOf(naughty) > -1){
// 				naughtyWords ++;
// 				continue wordloop;
// 			}
// 		}

// 		// check for vowels
// 		let vowelCount = 0;
// 		for (letter of [...word]){
// 			vowelCount += (letter === 'a' || letter === 'e' || letter === 'i' || letter === 'o' || letter === 'u') ? 1 : 0;
// 		}
// 		if (vowelCount < 3){
// 			naughtyWords ++;
// 			continue wordloop;
// 		}

// 		//check for double letters
// 		let hasDoubles = false;
// 		doubleloop:
// 		for (letters of doubleLetters){
// 			if (word.indexOf(letters) > -1){
// 				hasDoubles = true;
// 				break doubleloop;
// 			}
// 		}
// 		if (!hasDoubles){
// 			naughtyWords ++;
// 			continue wordloop;
// 		}

// 		niceWords++;

// 	}

// 	console.log(words.length, naughtyWords, niceWords);

// });

// part 2

const fs = require("fs");
let words = []
let niceWords = 0;
let naughtyWords = 0;

fs.readFile("./challenge5-input.txt", (err, data) => {

	if (err) {
		console.log(err);
	} else {
		words = data.toString().trim().split("\n");
	}

	wordloop:
	for (word of words) {

		niceWords++;

	}

	console.log(words.length, naughtyWords, niceWords);

});
