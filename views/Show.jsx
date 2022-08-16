

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


class Show extends React.Component {
       render() {
const {pokemon} = this.props
    return(
      
         
              
                     

                <html style={bg}>
                <head>
                    <title></title>
                </head>
                <body>
                    <h1 style={h1}>Gotta Catch 'Em All!</h1>
                  <h2>{pokemon.name}</h2>
                  <img src={pokemon.img + '.jpg'}></img><br />
        <a href="/pokemon">Back to the Index Page</a><br />
        <a href="/pokemon/new">Create a New Pokemon</a>
                </body>
                </html>
              )       
                     
              
       }
}

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

module.exports = Show;