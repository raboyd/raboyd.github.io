// Solve the below problems:

// #1) Convert the below promise into async await
fetch('https://swapi.co/api/starships/9/')
  .then(response => response.json())
  .then(console.log)

const getStarShipInfo = async function(){
  const resp = await fetch('https://swapi.co/api/starships/9/');
  const jsonResp = await resp.json();
  console.log(jsonResp);
}

// #2) ADVANCED: Update the function below from the video to also have
// async await for this line: fetch(url).then(resp => resp.json())
// So there shouldn't be any .then() calls anymore!
// Don't get discouraged... this is a really tough one...
const urls = [
  'https://jsonplaceholder.typicode.com/users',
  'https://jsonplaceholder.typicode.com/posts',
  'https://jsonplaceholder.typicode.com/albums'
]

const getData = async function() {
  const fetchedUrls = await Promise.all(urls.map(url => fetch(url)));
  const [users, posts, albums] = await Promise.all(fetchedUrls.map(data => data.json()));
  console.log('users', users);
  console.log('posts', posts);
  console.log('albums', albums);  
}

// const getData = async function() {
//   const [ users, posts, albums ] = await Promise.all(urls.map(url =>
//       fetch(url).then(resp => resp.json())
//   ));
//   console.log('users', users);
//   console.log('posts', posts);
//   console.log('albums', albums);
// }


// #3) Add a try catch block to the #2 solution in order to catch any errors.
// Now chnage one of the urls so you console.log your error with 'ooooooops'
const urls = [
  'https://jsonplaceholde.typicode.com/users',
  'https://jsonplaceholder.typicode.com/posts',
  'https://jsonplaceholder.typicode.com/albums'
]

const getData = async function() {

  try {
    const fetchedUrls = await Promise.all(urls.map(url => fetch(url)));
    const [users, posts, albums] = await Promise.all(fetchedUrls.map(data => data.json()));
    console.log('users', users);
    console.log('posts', posts);
    console.log('albums', albums);  
  } catch (error){
    console.log('Oooooops :(');
  }
}