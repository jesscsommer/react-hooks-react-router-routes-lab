import React from "react";
import { directors } from "../data";
import { v4 as uuid } from "uuid"

function Directors() {
  return (<div>
    <h1>Directors Page</h1>
    {directors.map(director => 
      <div key={uuid()}>
        <h2>{director.name}</h2>
        <ul>{director.movies.map(movie => <li key={uuid()}>{movie}</li>)}</ul>
      </div>
      )}
    </div>);
}

export default Directors;
