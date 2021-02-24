import React, { useState, useEffect } from "react";

import Summary from "./Summary";

const Detail = (props) => {
  const [isLoading, setIsLoading] = useState(false);
  const [pokemon, setPokemon] = useState({});

  // componentDidUpdate(prevProps) {
  //   console.log("Component did update");
  //   if (prevProps.selectedPokemon !== this.props.selectedPokemon) {
  //     this.fetchData();
  //   }
  // }

  const fetchData = async () => {
    console.log(
      `Sending Http request for new pokemon with name ${props.selectedPokemon}`
    );

    setIsLoading(true);

    try {
      const pokeData = await fetch(
        `https://pokeapi.co/api/v2/pokemon/${props.selectedPokemon}`
      ).then((response) => response.json());

      const {
        name,
        height,
        weight,
        moves,
        types: [{ type }],
      } = pokeData;

      setPokemon({
        name,
        height,
        weight,
        type: type.name,
        movesCount: moves.length,
        image: `https://img.pokemondb.net/artwork/large/${name}.jpg`,
      });
    } catch (error) {
      console.log(error);
    }

    setIsLoading(false);
  };

  useEffect(() => {
    // componentDidMount
    fetchData();

    return () => {
      // componentWillUnmount
      console.log("Too soon...");
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  let content = <p>Loading Detail...</p>;

  if (!isLoading && pokemon.name) {
    content = (
      <Summary
        image={pokemon.image}
        name={pokemon.name}
        height={pokemon.height}
        weight={pokemon.weight}
        type={pokemon.type}
        movesCount={pokemon.movesCount}
      />
    );
  } else if (!isLoading && !pokemon.name) {
    content = <p>Failed to fetch Detail.</p>;
  }

  return content;
};

export default React.memo(Detail, (prevProps, nextProps) => {
  // shouldComponentUpdate
  return prevProps.selectedPokemon === nextProps.selectedPokemon;
});
