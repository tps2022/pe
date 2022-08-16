//this app begins by displaying an array called fruits to the user
/*
-In your server.js file, set up your server

require express
set express() to a variable
set a variable of port to 3000
set your app to listen to the port and include a console.log(), so that you can tell when your server is running
include a get route / that will res.send('Welcome to the Pokemon App!'); so that when you got to localhost:3000, you will see Welcome to the Pokemon App!
In terminal
nodemon or nodemon server.js (if you set your package.json to start server.js you do't need to put it after nodemon )
GOTCHA! : nodemon will only work if you run it from the same location as your package.json
In the browser
go to localhost:3000
check that you have your Welcome to the Pokemon App! message displaying*/




//... and then farther down the file


const express = require('express');
//require env file
require('dotenv').config()
const Pokemon = require('./models/pokemon.js'); //this is require our pokemon views 
const app = express();
const port = process.env.PORT || 3000;
const methodOverride = require('method-override')
const pokemonData = require('./utilities/pokemonData')

//require mongoose
const mongoose = require('mongoose');
//this is to process our mongo connection
mongoose.connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true });
mongoose.connection.once('open', ()=> {
    console.log('connected to mongo');
});



//view engine
app.set('view engine', 'jsx'); // this sets up our html template
app.engine('jsx', require('express-react-views').createEngine());//initializing our view engine



//middleware
app.use((req, res, next) => {
    console.log('I run for all routes');
    next();
});
app.use(express.urlencoded({extended:false}));
app.use(methodOverride('_method'))


//route for localhost:3000/ /*our get route - when user goes to localhost:3000, thet will see: 'Welcome to the Pokemon App' */


//seed route
app.get('/pokemon/seed', (req,res) => {
    //comment the line below if you don't want to delete your whole entire collection
    Pokemon.deleteMany({})
    //create a list of pokemon into our database
    Pokemon.create(pokemonData)
    res.redirect('/pokemon')
})

app.get('/', (req, res) => {
    res.send('Welcome to the Pokemon App')
  })
  

  
  /* Index view
  app.get('/models/pokemon', (req, res) => {
    res.send(pokemon)
  })*/
  
  //pokemon route
  app.get('/pokemon', (req, res) => {
    Pokemon.find({},(err, allPokemon)=>{
        res.render('Index', {
            pokemon: allPokemon  
        })
    } )
});
  






/*our original database with a single array
const fruits = ['apple', 'banana', 'pear'];*/

//our more ehnanced database - instead of a single array, this database features an array of three nested arrays
/*
const fruits = [
    {
        name:'apple',
        color: 'red',
        readyToEat: true
    },
    {
        name:'pear',
        color: 'green',
        readyToEat: false
    },
    {
        name:'banana',
        color: 'yellow',
        readyToEat: true
    }
];
*/
/*
//this is our view engine for jsx and express-react-views
//needs to be done above routes
app.set('view engine', 'jsx'); // this sets up our html template
app.engine('jsx', require('express-react-views').createEngine());//initializing our view engine
*/







//Create a get route /pokemon that will res.send(pokemon), which will display your pokemon data as json in the browser
  //Change your /pokemon route to res.render your Index.jsx file
// app.get('/pokemon', (req, res) => {
//     res.render('Index', {pokemon:pokemon});
// });


//new route - for displaying the page to create a new pokemon
//put this above your Show route so that the show route doesn't accidentally pick up a /fruits/new request
app.get('/pokemon/new', (req, res) => {
    res.render('New');
});




//post/create route to take the info from the user completing the form, and create a new fruit based on their input
app.post('/pokemon/', (req, res) => {
    let name=req.body.name.split('')
    name[0]=name[0].toUpperCase()
     req.body.name=name.join('')

    Pokemon.create(req.body, (err, createdPokemon) => {
             res.redirect('/pokemon')
                // res.send(createdPokemon)

    })

    // if(req.body.readyToEat === 'on'){ //if checked, req.body.readyToEat is set to 'on'
    //     req.body.readyToEat = true; //do some data correction
    // } else { //if not checked, req.body.readyToEat is undefined
    //     req.body.readyToEat = false; //do some data correction
    // }
    // pokemon.push(req.body);
    
  
});


//ids should always be at bottom - show route -view pokemon at index of id 
app.get('/pokemon/:id', (req, res) => {
    // res.render('Show', {pokemon:pokemon[req.params.id]});
    Pokemon.findById(req.params.id,(err,foundPokemon) => {
            res.render('Show', {
                pokemon: foundPokemon
            })
    } )
});





//index view - Change your /pokemon route to res.render your Index.jsx file
// app.get('/models/pokemon', (req, res) => {
//     res.render('Index');
// });

/*
//post/create route to take the info from the user completing the form, and create a new fruit based on their input
app.post('/fruits', (req, res) => {

        if(req.body.readyToEa
            
            
            
            
            t === 'on'){ //if checked, req.body.readyToEat is set to 'on'
            req.body.readyToEat = true; //do some data correction
        } else { //if not checked, req.body.readyToEat is undefined
            req.body.readyToEat = false; //do some data correction
        }
        fruits.push(req.body);
        console.log(fruits);
        res.redirect('/fruits');
});

*/

//
/*show route - this route url would be localhost:3000/0 (or whatever array index we choose) - in the browser, it will display a single element from the fruits array based on the index
app.get('/fruits/:indexOfFruitsArray', (req, res) => {res.send(fruits[req.params.indexOfFruitsArray])
})
*/




/*


Inside your server.js, add a new get route /pokemon/:id
That will res.send(req.params.id);
So, when you go to localhost:3000/pokemon/whatever
whatever will show up in the brow
*/

//show route
//this is how we'll show the data using whats in Show.jsx
// app.get('/pokemon/:indexOfPokemonArray', function(req, res){
//     res.render('Show', { //second param must be an object
//        pokemon: pokemon[req.params.indexOfPokemonArray] 
//     });
// });    

/*
Essential Review Questions
-Where do we get Fruit From? from the views folder and the JSX file
-What two lines of code make our application able to use the JSX View Engine: app.set('view engine', 'jsx'); 
app.engine('jsx', require('express-react-views').createEngine());
*/


//edit/update page
app.get('/pokemon/:id/edit', (req, res) =>{
    Pokemon.findById(req.params.id, (error, foundPokemon) =>{
        if (!error){
            res.render('Edit', {pokemon: foundPokemon
            })
        } else{
            res.send({message: error.message})
        }
    })
})

//put
app.put('/pokemon/:id', (req, res) => {
    Pokemon.findByIdAndUpdate(req.params.id, req.body, {
        new: true
    }, (error, pokemon) => {
        res.redirect(`/pokemon/${req.params.id}`)
    })
})

//delete route
app.delete('/pokemon/:id', (req, res) => {
    console.log('we are deleting')
    Pokemon.findByIdAndRemove(req.params.id, (err, data) => {
        res.redirect('/pokemon')
    })
})

//another way to do this delete route
// app.delete('/pokemon/:id', (req, res) => {
//     Pokemon.findByIdAndRemove(req.params.id)
//         res.redirect('/pokemon')


// })




//listen - logs when the server is running correctly
app.listen(port,() => {
    console.log('i am listening on port' , port);
});


