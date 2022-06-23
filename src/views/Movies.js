import * as FetchApi from '../services/FetchApi';
import React, { useState, useEffect } from 'react';
import { Link, useSearchParams, useLocation } from 'react-router-dom';
import styles from './views.module.css';

const Movies = ({ onSubmit }) => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [searchQuery, setSearchQuery] = useState('');
  const [filmsList, setFilmsList] = useState(null);
  const location = useLocation();

  const query = searchParams.get('query');

  useEffect(() => {
    if (query !== null) {
      setSearchQuery(query);
      FetchApi.FetchMovieByName(query)
        .then(articles => {
          setFilmsList(articles.data.results);
        })
        .catch(error => console.log(error));
    }
  }, [query]);

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
        <form className={styles.serchForm} onSubmit={handleSubmit}>
          <button type="submit" className={styles.button12}>
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
      <div className={styles.homeList}>
        {filmsList &&
          filmsList.map(item => {
            return (
              <li key={item.id} className={styles.listItem}>
                <Link to={`/movies/${item.id}`} state={{ from: location }}>
                  {' '}
                  {item.title}
                </Link>
              </li>
            );
          })}
      </div>
    </>
  );
};

export default Movies;
