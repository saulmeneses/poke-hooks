import React, { Component } from 'react';

import './App.css';

import PokemonList from './components/PokemonList';
import Detail from './components/Detail';


class App extends Component {

  state = {
    selectedPoke: 'ditto',
    team: 'blue',
    closed: false,
  };


  selectPokemon = name => {
    this.setState({ selectedPoke: name });
  };

  closeHandler = () => {
    this.setState({ closed: true });
  };

  toggleState = () => {
    const team = this.state.team === 'blue' ? 'red' : 'blue';
    this.setState({ team })
  }

  render() {
    let content = (
      <div className="container">
        <PokemonList selectPokemon={this.selectPokemon} team={this.state.team}/>
        <Detail selectedPoke={this.state.selectedPoke}/>
        <div>
          <button className="toggle-team" onClick={this.toggleState}>Toggle team!</button>
          <button className="toggle-team" onClick={this.closeHandler}>Close pokedex</button>
          <p>You are now part of the <strong className={`team-${this.state.team}`}>{this.state.team}</strong> team!!!</p>
        </div>
      </div>
    );

    if (this.state.closed) {
      content =  (
        <div className="container">
          <h1>Pokedex closed!</h1>
        </div>
      );
    }
    return content;
  }
}

export default App;
