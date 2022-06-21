import React, { useState, useEffect } from 'react';
import { useParams, Link, Outlet, useLocation } from 'react-router-dom';
import * as FetchApi from '../FetchApi/FetchApi';

const MoviePage = () => {
  const [film, setFilm] = useState(null);
  const [error, setError] = useState(null);
  const { itemId } = useParams();
  const location = useLocation();

  useEffect(() => {
    FetchApi.FetchMovieById(itemId)
      .then(movieInfo => setFilm(movieInfo.data))
      .catch(error => {
        console.log(error);
        setError(error);
      });
  }, [itemId]);

  const path = location?.state?.from ?? '/';

  console.log(location.state.from);
  return (
    <>
      <Link to={path}>Go Back</Link>
      {itemId} Movie page1
      {error && <div>There are no succh movie !</div>}
      {film && (
        <img
          alt="Movie Poster"
          src={`https://image.tmdb.org/t/p/w500/${film.poster_path}`}
          width="200px"
        ></img>
      )}
      <li>
        <Link to="Cast" state={{ from: path }}>
          Cast !
        </Link>
      </li>
      <li>
        <Link to="Reviews" state={{ from: path }}>
          Reviews !
        </Link>
      </li>
      <Outlet />
    </>
  );
};

export default MoviePage;
