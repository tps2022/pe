

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


class New extends React.Component {
       render() {
const {pokemon} = this.props
    return(
      
         
              
                     

                <html style={bg}>
                <head>
                    <title></title>
                </head>
                <body>
                
                  
                  {/* <img src={pokemon.img + '.jpg'}></img><br /> */}
    

        <div>
               <h1>Form</h1>
               {/* NOTE: action will be the route, method will be the HTTP verb */}
               <form action="/pokemon" method="POST">
                 Pokemon Name: <input type="text" name="name" /><br/>
               Image: <input type="text" name="img" /><br/>
                 <input type="submit" name="" value="Create Pokemon"/>
               </form>

               <a href="/pokemon">Back to the Index Page</a><br />
              <a href="/pokemon/new">Create a New Pokemon</a>

           </div>
       
                </body>
                </html>
              )       
                     
              
       }
}






module.exports = New;