import React, { useState, useEffect, Suspense } from 'react';
import { useParams, Link, Outlet, useLocation } from 'react-router-dom';
import Loader from './Loader';
import * as FetchApi from '../services/FetchApi';
import styles from './views.module.css';

const MoviePage = () => {
  const [film, setFilm] = useState(null);
  const [error, setError] = useState(null);
  const { itemId } = useParams();
  const location = useLocation();

  console.log(film);
  useEffect(() => {
    if (!film) {
      FetchApi.FetchMovieById(itemId)
        .then(movieInfo => setFilm(movieInfo.data))
        .catch(error => {
          console.log(error);
          setError(error);
        });
    }
  }, [itemId, film]);

  const path = location?.state?.from ?? '/';

  return (
    <div className={styles.homeList}>
      <div>
        <Link to={path} className={styles.btnStyle}>
          {'<- Go Back'}
        </Link>
      </div>
      <div className={styles.movieInfo}>
        {error && <div>There are no such movie !</div>}
        {film && (
          <>
            <img
              alt="Movie Poster"
              src={`https://image.tmdb.org/t/p/w500/${film.poster_path}`}
              width="200px"
            ></img>
            <div className={styles.movieTextInfo}>
              <h3>
                {film.title} ({film.release_date.substring(0, 4)})
              </h3>
              <p>User score: {film.vote_average * 10} %</p>
              <h4>Overview</h4>
              <p>{film.overview}</p>
              <h4>Genres</h4>
              {film.genres.map(item => {
                return `${item.name}  `;
              })}
            </div>
          </>
        )}
      </div>

      <div className={styles.additionalInfo}>
        <p>Additional information</p>
        <li>
          <Link to="Cast" state={{ from: path }} className={styles.movieLinks}>
            Cast
          </Link>
        </li>
        <li>
          <Link
            to="Reviews"
            state={{ from: path }}
            className={styles.movieLinks}
          >
            Reviews
          </Link>
        </li>
      </div>

      <Suspense fallback={<Loader />}>
        <Outlet />
      </Suspense>
    </div>
  );
};

export default MoviePage;
