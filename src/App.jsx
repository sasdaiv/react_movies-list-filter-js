import React, { useState } from 'react';

import './App.scss';
import { MoviesList } from './components/MoviesList';
import moviesFromServer from './api/movies.json';

const getFilteredMovies = (movies, query) => {
  const preparedQuery = query.toLowerCase().trim();

  if (query) {
    return movies.filter((movie) => {
      const title = movie.title.toLowerCase();
      const description = movie.description.toLowerCase();

      return (
        title.includes(preparedQuery)
        || description.includes(preparedQuery)
      );
    });
  }

  return movies;
};

export const App = () => {
  const [searchQuery, setSearchQuery] = useState('');

  const filteredMovies = getFilteredMovies(moviesFromServer, searchQuery);

  return (
    <div className="page">
      <div className="page-content">
        <div className="box">
          <div className="field">
            {/* eslint-disable-next-line jsx-a11y/label-has-associated-control */}
            <label htmlFor="search-query" className="label">
              Search movie
            </label>

            <div className="control">
              <input
                type="text"
                id="search-query"
                className="input"
                placeholder="Type search word"
                onChange={e => setSearchQuery(e.target.value)}
              />
            </div>
          </div>
        </div>

        <MoviesList
          movies={filteredMovies}
        />
      </div>

      <div className="sidebar">
        Sidebar goes here
      </div>
    </div>
  );
};
