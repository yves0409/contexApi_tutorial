import React from "react";

const Movie = ({ name, price }) => {
  return (
    <div>
      <h3>Name: {name}</h3>
      <h4 style={{ color: "green" }}>Price: {price}</h4>
    </div>
  );
};

export default Movie;
