import React, { Component } from "react";

import "./PokemonList.css";

class PokemonList extends Component {
  state = { pokemonList: [], isLoading: false };

  async componentDidMount() {
    this.setState({
      isLoading: true,
      error: false,
    });
    try {
      const response = await fetch(
        "https://pokeapi.co/api/v2/pokemon?limit=5&offset=130"
      );
      const data = await response.json();
      const pokemonList = data.results;
      this.setState({
        pokemonList: pokemonList.map((pokemon, index) => ({
          name: pokemon.name,
          id: index + 1,
        })),
        isLoading: false,
      });
    } catch (error) {
      console.log(error);
      this.setState({
        isLoading: false,
      });
    }
  }

  render() {
    let content = <p>Loading pokemon list...</p>;

    if (
      !this.state.isLoading &&
      this.state.pokemonList &&
      this.state.pokemonList.length > 0
    ) {
      content = (
        <div className={`list-container`}>
          {this.state.pokemonList.map((pokemon) => (
            <button
              className={`menu-button ${this.props.team}`}
              key={pokemon.id}
              value={pokemon.id}
              onClick={() => {
                this.props.selectPokemon(pokemon.name);
              }}
            >
              {pokemon.name}
            </button>
          ))}
        </div>
      );
    } else if (
      !this.state.isLoading &&
      (!this.state.pokemonList || this.state.pokemonList.length === 0)
    ) {
      content = <p>Could not fetch any data.</p>;
    }
    return content;
  }
}

export default PokemonList;
