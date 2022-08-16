# Pokemon App
A simple, scrappy app created to showcase understanding of building and deploying CRUD apps.




## Web version
https://pokemonherokuapp.herokuapp.com/
## Features
- Uses HTML, CSS, Javascript, Node.js, and Express.js
- Deployed to Heroku

| URL | HTTP Verb | Action | Notes
| --- | --- | --- | --- | 
| /fruits/ | GET | index | INDEX when a user types localhost:3000/fruitsin browser this route shows a listor indexof all fruits
|/fruits/new | GET | new | NEW when a user types localhost:3000/fruits/newin browser this route shows the user a form to create a NEWfruit
|/fruits/:id | DELETE | destroy | DELETE initiates a delete request through a form submission with action = http://localhost:3000/fruits/:idOfFruitand allows the application the ability to deletea fruit
|/fruits/:id | PUT | update | UPDATE initiates a put request through a form submission with action = http://localhost:3000/fruits/:idOfFruitand allows the application the ability to Updatedata about a fruit
|/fruits | POST | create | CREATE initiates a post request through a form submission with action = http://localhost:3000/fruits/and allows the application the ability to Createa fruit
|/fruits/:id/edit | GET | edit | EDIT when a user types localhost:3000/fruit/:idOfFruit/editin browser shows the user a form to edita fruit
|/fruits/:id | GET | show | SHOW when a user types localhost:3000/fruit/:idOfFruitshows the user an Individualfruit in the browser|
