import React, { FunctionComponent, useState,useEffect } from 'react';
import Pokemon from './models/pokemon';
import POKEMONS from './models/mockPokemons';
 
const App: FunctionComponent = () => {
 const [pokemons,setPokemons] = useState<Pokemon[]>([]); 

 useEffect(() =>{
    setPokemons(POKEMONS);
 },[]);
 
 return (
  <div>
     <h1 className='text-center'>Pokédex</h1>
     <div className="container">
        <div className="row">
           {pokemons.map(({id, name, picture, created}) =>(
              <div className="col-md-8 mx-auto" key={id} >
                 <div className="card mb-3">
                    <div className="row ">
                           <div className="col-md-4">
                              <img src={picture} alt={name} className="img-fluid rounded-start" />
                           </div>
                           <div className="col-md-8">
                              <div className="card-body">
                                 <h5 className="card-title">{name}</h5>
                                 <p className="card-text"><small> {created.toString()} </small></p>
                              </div>
                           </div>
                    </div>
                    
                 </div>
              </div>
           ) )}
        </div>
     </div>
  </div>
  );
}
 
export default App;