import React, { Component } from "react";

import "./App.css";

import PokemonList from "./components/PokemonList";
import Detail from "./components/Detail";

const TEAMS = {
  BLUE: "blue",
  RED: "red",
};

class App extends Component {
  state = {
    selectedPokemon: "ditto",
    team: TEAMS.BLUE,
    closed: false,
  };

  selectPokemon = (name) => {
    this.setState({ selectedPokemon: name });
  };

  closePokedex = () => {
    this.setState({ closed: true });
  };

  changeTeam = () => {
    const team = this.state.team === TEAMS.BLUE ? TEAMS.RED : TEAMS.BLUE;
    this.setState({ team });
  };

  render() {
    let content = (
      <div className="container">
        <PokemonList
          selectPokemon={this.selectPokemon}
          team={this.state.team}
        />
        <Detail selectedPokemon={this.state.selectedPokemon} />
        <div>
          <button className="action-button" onClick={this.changeTeam}>
            Change team!
          </button>
          <button className="action-button" onClick={this.closePokedex}>
            Close pokedex
          </button>
          <p>
            You are now part of the{" "}
            <strong className={`team-${this.state.team}`}>
              {this.state.team}
            </strong>{" "}
            team!!!
          </p>
        </div>
      </div>
    );

    if (this.state.closed) {
      content = (
        <div className="container">
          <h1>Pokedex closed!</h1>
        </div>
      );
    }
    return content;
  }
}

export default App;
