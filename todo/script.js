var button = document.getElementById("enter");
var input = document.getElementById("userinput");
var items = document.querySelectorAll("li");
var ul = document.querySelector("ul");

function inputLength() {
	return input.value.length;
}

function createListElement() {
	var button = document.createElement("button");
	var li = document.createElement("li");
	button.appendChild(document.createTextNode("Delete"));
	button.classList.add("btn", "btn-danger");
	li.appendChild(button);
	li.appendChild(document.createTextNode(input.value));
	addEventsToItem(li);
	ul.appendChild(li);
	input.value = "";
}

function addListAfterClick() {
	if (inputLength() > 0) {
		createListElement();
	}
}

function addListAfterKeypress(event) {
	if (inputLength() > 0 && event.keyCode === 13) {
		createListElement();
	}
}

function addEventsToItem(item){
	item.addEventListener("click", function () { 
		item.classList.toggle("done");
	});
	item.querySelector("button").addEventListener("click", function (){
		ul.removeChild(this.parentElement);
	});
}

items.forEach(function (item){
	addEventsToItem(item);
});

button.addEventListener("click", addListAfterClick);
input.addEventListener("keypress", addListAfterKeypress);