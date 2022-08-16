//database
/*Instructions:
 Set up your 'database' so that it can be exported to your server.js and then be required by your server.js
Set this 'database' to a variable called pokemon in your server.js file
Create a get route /pokemon that will res.send(pokemon), which will display your pokemon data as json in the browser
*/

//test with array with only name property
// const pokemon = [
//     {testname: "pokemon1"},
//    {name: "pokemon2"},
// {name: "pokemon3"},
// {name: "pokemon4"},
// {name: "pokemon5"},
// {name: "pokemon6"},
// {name: "pokemon7"}
//  ];

//test
 //const pokemon = 'Pokemon name and image will eventually be displayed on this index.jsx Index page'

//database - uncomment after testing
// const pokemon = [
//     {name: "bulbasaur", img: "http://img.pokemondb.net/artwork/bulbasaur"},
//     {name: "ivysaur", img: "http://img.pokemondb.net/artwork/ivysaur"},
//     {name: "venusaur", img: "http://img.pokemondb.net/artwork/venusaur"},
//     {name: "charmander", img: "http://img.pokemondb.net/artwork/charmander"},
//     {name: "charizard", img: "http://img.pokemondb.net/artwork/charizard"},
//     {name: "squirtle", img: "http://img.pokemondb.net/artwork/squirtle"},
//     {name: "wartortle", img: "http://img.pokemondb.net/artwork/wartortle"}
//  ];


 const mongoose = require('mongoose')

 const pokemonSchema = new mongoose.Schema({

name:{type: String, required: true},
img:{type: String, required: true},
// readyToEat: Boolean

 })
 //export - making the info in this file available to the server.js file
 //each .js file is self-contained; exports tells what youre willing to make available from this file
 //think of its as these are things im willing to let the world see - if the info is not in exports, the app cant use it


 const Pokemon = mongoose.model('Pokemon', pokemonSchema)
module.exports = Pokemon


/*Set up your index view
Instead of displaying json at your /pokemon route, you should serve the Index.jsx file you created that will display your pokemon
You will have to set up your jsx file
Start with your html boilerplate code
Add an <h1> that describes this page, i.e. 'See All The Pokemon!'*/