import React from "react";
import { Link } from "react-router-dom";

const Movie = (props) => {
  const id = props.id;
  const Description = props.Description;
  const URL = props.URL;
  const Title = props.Title;
  return (
    <div
      style={{
        border: "4px solid #000",
        borderRadius: "10px",
        width: "45%",
        textAlign: "center",
        overflow: "hidden",
        padding: "5px",
        margin: "15px",
      }}
    >
      <h1>{id}</h1>
      <h1>{Title}</h1>
      <h2>{Description}</h2>
      <img src={URL} alt="movie" height="400px" />
      <br />
      <br />
      <Link className="btn btn-outline-dark col-md-6" to={`/movies/${id}`}>Details</Link>
    </div>
  );
};

export default Movie;
