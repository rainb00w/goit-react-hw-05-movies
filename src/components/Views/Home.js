import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import * as FetchApi from '../FetchApi/FetchApi';

const Home = () => {
  const [filmsList, setFilmsList] = useState(null);
  const location = useLocation();

  useEffect(() => {
    FetchApi.FetchTrends()
      .then(articles => setFilmsList(articles.data.results))
      .catch(error => console.log(error));
  }, []);

  //   console.log(filmsList, Date.now());

  return (
    <>
      {filmsList &&
        filmsList.map(item => {
          return (
            <li key={item.id}>
              <Link to={`/movies/${item.id}`} state={{ from: location }}>
                {item.title}
              </Link>
            </li>
          );
        })}
    </>
  );
};

export default Home;
