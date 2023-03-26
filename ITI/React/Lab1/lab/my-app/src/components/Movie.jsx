import React from 'react';

const Movie = (props) => {
  const { id, name, year, rating} = props;
  return (
    <div
      style={{
        border: "2px solid #000",
        borderRadius: "10px",
        margin: "15px auto",
      }}
    >
      <h1>{id}</h1>
      <h1>{name}</h1>
      <h1>{year}</h1>
      <h1>{rating}</h1>
    </div>
  );
};

export default Movie;