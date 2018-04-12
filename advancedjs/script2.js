var h1 = document.querySelector("h1");

h1.addEventListener("click", function() {
	console.log(this);
});


var arrowFunction = input => input + 1;
var arrowFunction2 = (input1, input2) => input1 * input2;
var arrowFunction3 = (input1, input2) => {
	return input1 / input2;
};
