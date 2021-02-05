import React, { useState, useContext } from "react";
import { MovieContext } from "../components/MovieContext";

const AddMovie = () => {
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [id, setId] = useState("");
  const [movies, setMovies] = useContext(MovieContext);

  const updateName = (e) => {
    setName(e.target.value);
  };

  const updatePrice = (e) => {
    setPrice(e.target.value);
  };

  const updateId = (e) => {
    setId(e.target.value);
  };

  const addMovie = (e) => {
    e.preventDefault();
    setMovies((prevMovies) => [
      ...prevMovies,
      { name: name, price: price, id: id },
    ]);
  };
  return (
    <div>
      <form onSubmit={addMovie}>
        <input
          type="text"
          name="name"
          placeholder="name"
          value={name}
          onChange={updateName}
        />
        <input
          type="text"
          name="price"
          placeholder="price"
          value={price}
          onChange={updatePrice}
        />
        <input
          type="text"
          name="id"
          placeholder="id"
          value={id}
          onChange={updateId}
        />
        <button>Submit</button>
      </form>
    </div>
  );
};

export default AddMovie;
