import './App.css';
import React, {useEffect,useState} from 'react';
import axios from 'axios';

function App() {
  const [pokemon,setPokemon] = useState([]);

  useEffect(() => {
    axios.get('https://pokeapi.co/api/v2/pokemon?limit=807')
    .then((response) => {
      console.log(response.data.results)
      setPokemon(response.data.results)
    })
    .catch((err) => {
      console.log(err);
    })
  }, []);
  return (
      <div className="App">
        <h1>Axios Pokemon API</h1>
          {pokemon.map((poke,index) => (
            <ul key={index} className="pointer">
              <li>{poke.name}</li>
            </ul>
        ))}
    </div>
  );
}

export default App;