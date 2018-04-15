// EX1

const movePlayer = (distance, direction) => {
	console.log(`Player moved ${distance}m to the ${direction}`);
}

async function letsDoIt(){
	const result1 = await movePlayer(100, 'left');
	const result2 = await movePlayer(50, 'right')
	console.log(result1, result2);
}

// EX2

async function letsDoIt(){
	const result1 = await fetch('https://swapi.co/api/people');
	const result2 = await fetch('https://swapi.co/api/planets');
	console.log(result1, result2);
}