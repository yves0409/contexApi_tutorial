import React, { useState, createContext } from "react";

export const MovieContext = createContext(); //Whenever we wanna use this , we import MovieContext (state)

export const MovieProvider = (props) => {
  const [movies, setMovies] = useState([
    {
      name: "Harry Potter",
      price: "$10",
      id: 23124,
    },
    {
      name: "Game of thrones",
      price: "$10",
      id: 23125,
    },
    {
      name: "Inception",
      price: "$10",
      id: 23126,
    },
  ]);

  return (
    <MovieContext.Provider value={[movies, setMovies]}>
      {props.children}
    </MovieContext.Provider>
  );
};
