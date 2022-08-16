# Pokemon App
A simple, scrappy app created to showcase understanding of building and deploying CRUD apps.

## Features
- Uses HTML, CSS, Javascript, Node.js, and Express.js
- Deployed to Heroku

**App Structure**:
| URL | HTTP Verb | Action | Notes
| --- | --- | --- | --- | 
| /pokemon/ | GET | index | INDEX when a user types localhost:3000/pokemon in browser this route shows a list or index of all pokemon
|/pokemon/new | GET | new | NEW when a user types localhost:3000/pokemon/newin browser this route shows the user a form to create a NEW pokemon
|/pokemon/:id | DELETE | destroy | DELETE initiates a delete request through a form submission with action = http://localhost:3000/pokemon/:idOfPokemon and allows the application the ability to delete a pokemon
|/pokemon/:id | PUT | update | UPDATE initiates a put request through a form submission with action = http://localhost:3000/pokemon/:idOfPokemon and allows the application the ability to Updat edata about a pokemon
|/pokemon | POST | create | CREATE initiates a post request through a form submission with action = http://localhost:3000/pokemon/and allows the application the ability to Create a pokemon
|/pokemon/:id/edit | GET | edit | EDIT when a user types localhost:3000/pokemon/:idOfPokemon/editin browser shows the user a form to edit a pokemon
|/pokemon/:id | GET | show | SHOW when a user types localhost:3000/pokemon/:idOfPokemon shows the user an Individualpokemon in the browser|

## Live
https://pokemonherokuapp.herokuapp.com/

## Install
**Clone the repo:**
```
git clone https://github.com/tps2022/pe.git
```
```
git pull https://github.com/tps2022/pe.git master
```
**Install packages:**
*npm**
```
npm init -y
```
**express**
```
npm i express
```
**react**
```
npm install express-react-views react@16 react-dom@16 --save
```
**nodemon**
```
npm i nodemon -g
```
**dotenv**
```
npm i dotenv
```
**mongoose**
```
npm i mongoose 
```
