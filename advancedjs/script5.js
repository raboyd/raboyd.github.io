// Solve the below problems:

// #1) Line up the Turtle and the Rabbit at the start line:
const startLine = '     ||<- Start line';
let turtle = 'T';
let rabbit = 'R';

// it should look like this:
'     ||<- Start line'
'       🐢'
'       🐇'

// when you do:
console.log(startLine);
console.log(turtle.padStart(6));
console.log(rabbit.padStart(6));


// #2) What happens when you run turtle.trim().padEnd(9, '=') on the turtle variable
// Read about what the second parameter does in padEnd and padStart
//ans=adds 8 equals signs after thew turtle
turtle = turtle.trim().padEnd(9, '=');
console.log(turtle);

// #3) Get the below object to go from:
let obj = {
  my: 'name',
  is: 'Rudolf',
  the: 'reindeer'
}
// to this:
'my name is Rudolf the reindeer'

let greeting = Object.entries(obj).reduce((allwords, newword) => `${allwords} ${newword[0]} ${newword[1]}`, "");
console.log(greeting);


Object.entries(obj).map(value => value.join(" ")).join(' ')

