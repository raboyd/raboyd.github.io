var colour1 = document.querySelector("[name=colour1]");
var colour2 = document.querySelector("[name=colour2]");
var button = document.querySelector("button");
var label = document.querySelector("h3");
var body = document.querySelector("body");

colour1.addEventListener("input", colourChange);
colour2.addEventListener("input", colourChange);
button.addEventListener("click", randomColour);

function colourChange(){
	var style = "linear-gradient(to right, " + colour1.value + ", " + colour2.value + ")";
	body.style.background = style;
	label.textContent = style + ";";
}

function randomColour(){
	var random1 = '#'+(Math.random()*0xFFFFFF<<0).toString(16);
	var random2 = '#'+(Math.random()*0xFFFFFF<<0).toString(16);
	colour1.value = random1;
	colour2.value = random2;
	colourChange();
}

colourChange();