import React from "react";
import { useParams } from "react-router-dom";

const MovieDetails = () => {
  const { id } = useParams();
  return <div className="my-5 fs-1 fw-semibold">MovieDetails: {id}</div>;
};

export default MovieDetails;
