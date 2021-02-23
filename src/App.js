import React, { useState } from 'react';

import './App.css';

import PokemonList from './components/PokemonList';
import Detail from './components/Detail';


const TEAMS = {
  BLUE: 'blue',
  RED: 'red',
};

const App = () => {

  const [ selectedPokemon, setSelectedPokemon ] = useState('ditto');
  const [ team, setTeam ] = useState(TEAMS.BLUE);
  const [ closed, setClosed ] = useState(false);

  const selectPokemon = name => {
    setSelectedPokemon(name);
  };

  const closePokedex = () => {
    setClosed(true);
  };

  const changeTeam = () => {
    const newTeam = team === TEAMS.BLUE ? TEAMS.RED : TEAMS.BLUE;
    setTeam(newTeam);
  }

  let content = (
    <div className="container">
      <PokemonList selectPokemon={selectPokemon} team={team}/>
      <Detail selectedPokemon={selectedPokemon}/>
      <div>
        <button className="action-button" onClick={changeTeam}>Change team!</button>
        <button className="action-button" onClick={closePokedex}>Close pokedex</button>
        <p>You are now part of the <strong className={`team-${team}`}>{team}</strong> team!!!</p>
      </div>
    </div>
  );

  if (closed) {
    content =  (
      <div className="container">
        <h1>Pokedex closed!</h1>
      </div>
    );
  }
  return content;
}

export default App;
