import React from "react";
import { actors } from "../data";
import { v4 as uuid } from "uuid"

function Actors() {
  return (<div>
    <h1>Actors Page</h1>
    {actors.map(actor => 
      <div key={uuid()}>
        <h2>{actor.name}</h2>
        <ul>{actor.movies.map(movie => <li key={uuid()}>{movie}</li>)} </ul>
      </div>
      
      )}
    </div>);
}

export default Actors;
