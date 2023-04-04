import React, { useEffect, useState } from "react";
import Movie from "./Movie";
import axios from "axios";
import "bootstrap/dist/css/bootstrap.min.css";

const Movies = () => {
  const [movies, setMovies] = useState([]);
  useEffect(() => {
    const options = {
      method: "GET",
      url: "https://moviesdatabase.p.rapidapi.com/titles",
      headers: {
        "X-RapidAPI-Key": "157926fce2msh7883e885a5c1f34p109eeajsnc7c3d69d69d5",
        "X-RapidAPI-Host": "moviesdatabase.p.rapidapi.com",
      },
    };

    axios
      .request(options)
      .then((response) => {
        setMovies(response.data.results);
      })
      .catch((error) => {
        console.error(error);
      });
  });

  if (movies.length === 0) return <h1>Loading...</h1>;
  return (
    <>
      <h1 className="my-5 col-md-6 mx-auto border-bottom p-2"> Movies Page</h1>
      <div style={{ display: "flex", flexWrap: "wrap" }}>
        {movies
          .filter((m) => m.primaryImage?.url != null)
          .map((movie) => (
            <Movie
              key={movie.id}
              id={movie.id}
              Title={movie.titleText?.text ?? ""}
              Description={movie.primaryImage?.caption?.plainText ?? ""}
              URL={movie.primaryImage?.url ?? ""}
            />
          ))}
      </div>
    </>
  );
};

export default Movies;
