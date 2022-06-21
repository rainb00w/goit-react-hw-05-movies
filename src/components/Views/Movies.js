import * as FetchApi from '../FetchApi/FetchApi';
import React, { useState } from 'react';
import { Link, useSearchParams, useLocation } from 'react-router-dom';

const Movies = ({ onSubmit }) => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [searchQuery, setSearchQuery] = useState('');
  const [filmsList, setFilmsList] = useState(null);
  const location = useLocation();

  const query = searchParams.get('query');

  if (query !== null) {
    FetchApi.FetchMovieByName(query)
      .then(articles => {
        setFilmsList(articles.data.results);
      })
      .catch(error => console.log(error));
  }

  const handleChange = event => {
    setSearchQuery(event.currentTarget.value);
  };

  const handleSubmit = event => {
    event.preventDefault();

    if (searchQuery.trim() === '') {
      console.log('Warning !');
    }

    setSearchParams(`query=${searchQuery}`);
    FetchApi.FetchMovieByName(searchQuery)
      .then(articles => {
        setFilmsList(articles.data.results);
      })
      .catch(error => console.log(error));
  };

  return (
    <>
      <header className="">
        <form className="" onSubmit={handleSubmit}>
          <button type="submit" className="">
            <span className="">Search</span>
          </button>
          <input
            className=""
            name="searchQuery"
            type="text"
            autoComplete="off"
            autoFocus
            placeholder="Search movies"
            onChange={handleChange}
            value={searchQuery}
          />
        </form>
      </header>

      {filmsList &&
        filmsList.map(item => {
          return (
            <li key={item.id}>
              <Link to={`/movies/${item.id}`} state={{ from: location }}>
                {' '}
                {item.title}
              </Link>
            </li>
          );
        })}
    </>
  );
};

export default Movies;
