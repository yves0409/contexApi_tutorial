import React, { useContext } from "react";
import { MovieContext } from "../components/MovieContext";

const Nav = () => {
  const [movies, setMovies] = useContext(MovieContext);
  return (
    <div
      style={{
        backgroundColor: "black",
        color: "white",
        display: "flex",
        justifyContent: "space-between",
        padding: "5px 15px 5px 15px",
      }}
    >
      <h2>Yves</h2>
      <h3>List of movies: {movies.length}</h3>
    </div>
  );
};

export default Nav;
