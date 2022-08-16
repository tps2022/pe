# Pokemon App
A simple, scrappy app created to showcase understanding of building and deploying CRUD apps.

## Features
- Uses HTML, CSS, Javascript, Node.js, and Express.js
- Deployed to Heroku

**App Structure**:
| URL | HTTP Verb | Action | Notes
| --- | --- | --- | --- | 
| /pokemon/ | GET | index | INDEX when a user types localhost:3000/pokemonin browser this route shows a listor indexof all pokemon
|/pokemon/new | GET | new | NEW when a user types localhost:3000/pokemon/newin browser this route shows the user a form to create a NEWfruit
|/pokemon/:id | DELETE | destroy | DELETE initiates a delete request through a form submission with action = http://localhost:3000/pokemon/:idOfFruitand allows the application the ability to deletea fruit
|/pokemon/:id | PUT | update | UPDATE initiates a put request through a form submission with action = http://localhost:3000/pokemon/:idOfFruitand allows the application the ability to Updatedata about a fruit
|/pokemon | POST | create | CREATE initiates a post request through a form submission with action = http://localhost:3000/pokemon/and allows the application the ability to Createa fruit
|/pokemon/:id/edit | GET | edit | EDIT when a user types localhost:3000/fruit/:idOfFruit/editin browser shows the user a form to edita fruit
|/pokemon/:id | GET | show | SHOW when a user types localhost:3000/fruit/:idOfpokemonhows the user an Individualfruit in the browser|

## Web Version
https://pokemonherokuapp.herokuapp.com/
