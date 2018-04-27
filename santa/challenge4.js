const md5 = require('md5');

let number = 0;
let result = "";

while (result === ""){

	console.log(number, md5("bgvyzdsv" + number).substring(0,6));
	
	if ((md5("bgvyzdsv" + number)).substring(0,6) === "000000") {
		result = md5("bgvyzdsv" + number);
		break;
	}
	number++;

}

console.log("bgvyzdsv" + number);