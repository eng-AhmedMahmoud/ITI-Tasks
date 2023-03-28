import React, { Component } from "react";
import Movie from "./Movie";
import axios from "axios";

export default class Movies extends Component {
  state = {
    movies: [],
  };

  componentDidMount() {
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
        console.log(response.data.results);
        this.setState(() => ({ movies: response.data.results }));
      })
      .catch((error) => {
        console.error(error);
      });
  }
  render() {
    if (this.state.movies.length === 0) return <h1>Loading...</h1>;
    return (
      <>
        <h1 style={{ textAlign: "center" }}> Movies </h1>
        <div style={{ display: "flex", flexWrap: "wrap" }}>
          {this.state.movies
            .filter((m) => m.primaryImage?.url != null)
            .map((movie) => (
              <Movie
                key={movie.id}
                Title={movie.titleText?.text ?? ""}
                Description={movie.primaryImage?.caption?.plainText ?? ""}
                URL={movie.primaryImage?.url ?? ""}
              />
            ))}
        </div>
      </>
    );
  }
}
