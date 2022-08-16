const React = require('react');

/*class Index extends React.Component {
  render() {
    const { pokemon } = this.props;
     // const { pokemon } = this.props;
      console.log('we are in the index')
      console.log(pokemon)
      return (
              <div>
                  <h1>Pokemon Index Page</h1>
              </div>
      );
  }
}*/

//CSS styling 
//camel case for anything has two words - no hyphens
//css values (font size, names, hex codes or word have to be in quotes
const bg = {
    backgroundColor: 'pink',
}

const h1 = {
textDecoration:'underline',
border: 'dotted blue 2px'

}


class Index extends React.Component {
       render() {
const {pokemon} = this.props
    return(
      
         
              
                     

                <html style={bg}>
                <head>
                    <title></title>
                </head>
                <body>
                    <h1 style={h1}>See all the Pokemon!</h1>
                   <ul>
                    {pokemon.map((pokemon) => {

//make pokemon a string then split it, return first letter of string index as a upper case
                        pokemon.name=(pokemon.name).toString()
                       let name = pokemon.name.split('')
                       name[0]=name[0].toUpperCase()
                        pokemon.name=name.join('')  
                        return(
                            <li>
                              
                              <a href={`/pokemon/${pokemon.id}`}><h3>{pokemon.name}</h3></a> <form action={`/pokemon/${pokemon.id}?_method=DELETE`} method='POST'><button type="submit">Delete</button></form>
                              <a href={`/pokemon/${pokemon.id}/edit`}>Edit this Pokemon</a> 
                            </li>
                        )
                    })}
                    </ul>

                    <a href="/pokemon">Back to the Index Page</a><br />
        <a href="/pokemon/new">Create a New Pokemon</a>
        
                </body>
                </html>
              )       
                     
              
       }
}


module.exports = Index;

/*for the show page later
<html style={body}>
            <head>
                <title>{mons.name}</title>
            </head>
            <body style={main}>
                <h1>Gotta Catch 'Em All!</h1>
                <h2>{mons.name}</h2>
                <img src={mons.img}></img>
                <a href="http://localhost:3000/pokemon/%22%3E<h3>Back to Main Directory!</h3></a>
            </body>
            </html>

*/



/*for some reason this index view shows only the json data - this not what we want

const React = require('react');

class Index extends React.Component {
  render() {
      const { pokemon } = this.props;
      console.log('we are in the index')
      console.log(pokemon)
      return (
              <div>
                  <h1>Pokemon Index Page</h1>
                  <ul>
                      {pokemon.map((pokemon, i) => {
                          return (
                              <li>

                                  { this is our link - it shows a link on the pokemon at index i from the pokemon.map above}<a href={`/pokemon/${i}`}>
                                      {pokemon.name} {/*when the user clicks the link, it goes to the show page }
                                  </a>{' '}
                                  {pokemon.img}
                                  <br />
                              </li>
                          );
                      })}
                  </ul>
                  <nav>
    <a href="/pokemon/new">Create a New Pokemon</a>
</nav>
              </div>
      );
  }
}

*/

