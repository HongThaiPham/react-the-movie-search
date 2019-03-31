import React, { useState, useEffect } from "react";
import ReactDOM from "react-dom";

import "./styles.css";

import Header from "./components/Header";
import Search from "./components/Search";
import Movie from "./components/Movie";

const MOVIE_API_URL = "http://www.omdbapi.com/?s=man&apikey=19f6c48c";

function App() {
  const [loading, setLoading] = useState(true);
  const [movies, setMovies] = useState([]);
  const [errorMessage, setErrorMessage] = useState(null);

  useEffect(() => {
    fetch(MOVIE_API_URL)
      .then(response => {
        response.json();
      })
      .then(jsonResponse => {
        setMovies(jsonResponse.Search);
        setLoading(false);
      });
  }, []);

  const search = searchValue => {
    setLoading(true);

    setErrorMessage(null);

    fetch(`http://www.omdbapi.com/?s=${searchValue}&apikey=19f6c48c`)
      .then(response => response.json())
      .then(jsonResponse => {
        if (jsonResponse.Response === "True") {
          setMovies(jsonResponse.Search);
        } else {
          setErrorMessage(jsonResponse.Error);
        }
        setLoading(false);
      });
  };
  return (
    <div className="App">
      <Header text="THE MOVIE SEARCH WITH REACT HOOK" />
      <Search search={search} />
      <p className="App-intro">Sharing a few of our favourite movies</p>
      <div className="movies">
        {loading && !errorMessage ? (
          <span>loading ...</span>
        ) : errorMessage ? (
          <div className="errorMessage">{errorMessage}</div>
        ) : (
          movies.map((movie, index) => (
            <Movie movie={movie} key={`${index}=${movie.Title}`} />
          ))
        )}
      </div>
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
