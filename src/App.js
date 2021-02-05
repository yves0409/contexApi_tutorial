import "./App.css";
import MovieList from "./components/MovieList";
import Nav from "./components/Nav";
import { MovieProvider } from "./components/MovieContext";
import AddMovie from "./components/AddMovie";

function App() {
  //Wrapping everything in the movieprovider component gives all the components inside acces to the state in MovieProvider
  return (
    <MovieProvider>
      <div className="App">
        <Nav />
        <AddMovie />
        <MovieList />
      </div>
    </MovieProvider>
  );
}

export default App;
