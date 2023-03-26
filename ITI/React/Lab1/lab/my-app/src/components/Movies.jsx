import React, { useState } from 'react';
import { v4 as uuid } from 'uuid';
import Movie from './Movie';
const Movies = () => {

  const [movies] = useState([
    {
      id: uuid(),
      name: 'The Shadchan Redemption',
      year: 1994,
      rating: 9.2,
    },
    {
      id: uuid(),
      name: 'The Godfather',
      year: 1972,
      rating: 9.1,
    },
    {
      id: uuid(),
      name: 'The Godfather: Part II',
      year: 1974,
      rating: 9.0,
    }
  ]);
  return (
    <>
      {movies.map((movie) => (
        <Movie key={movie.id} {...movie}/>
      ))}
    </>
  );
};

export default Movies;