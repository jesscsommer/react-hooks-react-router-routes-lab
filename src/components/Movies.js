import React from "react";
import { movies } from "../data";
import { v4 as uuid } from "uuid"

function Movies() {
  return (
  <div>
    <h1>Movies Page</h1>
    {movies.map(movie => 
      <div key={uuid()}>
        <h2>{movie.title}</h2>
        <p>{movie.time}</p>
        <ul>{movie.genres.map(genre => <li key={uuid()}>{genre}</li>)}</ul>
      </div>
    )}
  </div> 
  );
}

export default Movies;
