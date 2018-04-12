// let array = [1, 2, 3, 4, 5];
// let stringArray = ["blue ball", "red ball", "green pen", "blue badge", "green mouse", "green boat"];

// let newArray = [];
// array.forEach((number) => {
// 	newArray.push(number);
// });

// let fivetimesArray = array.map(number => number * 5);
// let tenTimesArray = array.map(number => number * 10);
// let hundredTimesArray = array.map(number => number * 100);

// let overTwoHundredArray = hundredTimesArray.filter(number => number > 200);

// let greenArray = stringArray.filter(item => item.includes("green"));

// let reduceTotal = array.reduce((acc, number) => acc + number, 0);


// Complete the below questions using this array:
const array = [
  {
    username: "john",
    team: "red",
    score: 5,
    items: ["ball", "book", "pen"]
  },
  {
    username: "becky",
    team: "blue",
    score: 10,
    items: ["tape", "backpack", "pen"]
  },
  {
    username: "susy",
    team: "red",
    score: 55,
    items: ["ball", "eraser", "pen"]
  },
  {
    username: "tyson",
    team: "green",
    score: 1,
    items: ["book", "pen"]
  },

];


//Create an array using forEach that has all the usernames with a "!" to each of the usernames
let bangArray = [];
array.forEach(user => {
  let newUser = Object.create(user);
  newUser.username = `${newUser.username}!`;
  bangArray.push(newUser);
});


//Create an array using map that has all the usernames with a "? to each of the usernames
let questionArray = array.map(user => {
	let newUser = Object.create(user);
  	newUser.username = `${newUser.username}?`;
	return newUser;
});


//Filter the array to only include users who are on team: red
let redTeamArray = array.filter(user => user.team === "red");


//Find out the total score of all users using reduce
// let scoreArray = array.map(user => user.score);
// let totalScore = scoreArray.reduce((acc, score) => acc + score);
let totalScore = array.reduce((acc, user) => {
	return acc + user.score
}, 0);


// (1), what is the value of i?
//ans=the index of the number in the array (e.g. 0, 1, 2, 3 ...)
// (2), Make this map function pure:
// const arrayNum = [1, 2, 4, 5, 8, 9];
// const newArray = arrayNum.map((num, i) => {
// 	console.log(num, i);
// 	alert(num);
// 	return num * 2;
// })
// ans =
const arrayNum = [1, 2, 4, 5, 8, 9];
const newArray = arrayNum.map(num => num * 2);

//BONUS: create a new list with all user information, but add "!" to the end of each items they own.
// let newUserArray = array.map(user => {
// 	let newUser = Object.create(user);
//   	newUser.items = newUser.items.map(item => `${item}!`);
// 	return newUser;
// });
const answer = array.map(user => {
	user.items = user.items.map(item => {
		return item + "!"
	});
	return user;
})