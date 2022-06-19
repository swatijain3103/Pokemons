import { useState } from "react";
import Axios from "axios";
import SearchIcon from '@mui/icons-material/Search';
import './App.css';

function App() {
  const [pokemonName, setPokemonName] = useState("");
  const [pokemon, setPokemon] = useState({
    img: "",
    name: "",
    height: "",
    weight: ""
  });
  


  const searchPokemon = () => {
    Axios.get(`https://pokeapi.co/api/v2/pokemon/${pokemonName}`).then(
    (response) => { 
    setPokemon({
    img: response.data.sprites.front_default,
    name: pokemonName,
    weight: response.data.weight,
    height: response.data.height
      });
      }
    );
     };
 

  return (
    <div className="App">
     
      <input type="text" placeholder="Pokemon Name" onChange={(event) => {setPokemonName(event.target.value) }}></input>
      <button>🔍</button>
      
      <div className="search">
        <SearchIcon onClick={searchPokemon}></SearchIcon>
      </div>
  
    
    <div className="DisplaySelection">
      <img src={pokemon.img}></img>
      <h1>Name: {pokemon.name}</h1>
      <h2>Height: {pokemon.height}</h2>
      <h2>Weight: {pokemon.weight}</h2>
    </div>
    </div>
  );
  }

export default App;
