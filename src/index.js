import React, { useState, useEffect, useReducer } from "react";
import ReactDOM from "react-dom";
import "./styles.css";

import Header from "./components/Header";
import Search from "./components/Search";
import Movie from "./components/Movie";

import { initialState, reducer } from "./redux";

const MOVIE_API_URL = "https://omdbapi.com/?s=man&apikey=19f6c48c";

function App() {
  //user Redux
  const [state, dispatch] = useReducer(reducer, initialState);

  useEffect(() => {
    fetch(MOVIE_API_URL)
      .then(response => response.json())
      .then(jsonResponse => {
        dispatch({
          type: "SEARCH_MOVIES_SUCCESS",
          payload: jsonResponse.Search
        });
      });
  }, []);

  const search = searchValue => {
    dispatch({
      type: "SEARCH_MOVIES_REQUEST"
    });

    fetch(`https://www.omdbapi.com/?s=${searchValue}&apikey=19f6c48c`)
      .then(response => response.json())
      .then(jsonResponse => {
        if (jsonResponse.Response === "True") {
          dispatch({
            type: "SEARCH_MOVIES_SUCCESS",
            payload: jsonResponse.Search
          });
        } else {
          dispatch({
            type: "SEARCH_MOVIES_FAILURE",
            payload: jsonResponse.Error
          });
        }
      });
  };

  const { movies, errorMessage, loading } = state;
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
