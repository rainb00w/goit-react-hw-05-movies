import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import * as FetchApi from '../FetchApi/FetchApi';
import styles from './views.module.css';

const Home = () => {
  const [filmsList, setFilmsList] = useState(null);
  const location = useLocation();

  useEffect(() => {
    FetchApi.FetchTrends()
      .then(articles => setFilmsList(articles.data.results))
      .catch(error => console.log(error));
  }, []);

  return (
    <div className={styles.homeList}>
      <h2>Trending today</h2>
      {filmsList &&
        filmsList.map(item => {
          return (
            <li key={item.id} className={styles.listItem}>
              <Link to={`/movies/${item.id}`} state={{ from: location }}>
                {item.title}
              </Link>
            </li>
          );
        })}
    </div>
  );
};

export default Home;
