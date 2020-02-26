import React from 'react';

import './Summary.css';


const Summary = props => {
  return (
    <div className="summary">
      <h1>{props.name}</h1>
      <img className="summary_image" src={props.image}/>
      <p>
        Height: <span className="summary__output">{props.height}</span>
      </p>
      <p>
        Weight: <span className="summary__output">{props.weight}</span>
      </p>
      <p>
        Type: <span className="summary__output">{props.type}</span>
      </p>
      <p>
        Moves count:{' '}
        <span className="summary__output">{props.movesCount}</span>
      </p>
    </div>
  );
};

export default Summary;
