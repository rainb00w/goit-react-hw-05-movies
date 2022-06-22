import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import * as FetchApi from '../FetchApi/FetchApi';

const Cast = () => {
  const [cast, setCast] = useState(null);
  const { itemId } = useParams();

  useEffect(() => {
    FetchApi.FetchMovieCast(itemId)
      .then(movieInfo => setCast(movieInfo.data.cast))
      .catch(error => {
        console.log(error);
      });
  }, [itemId]);

  return (
    <>
      {cast &&
        cast.map(item => {
          return (
            <li key={item.id}>
              <img
                alt="Movie Poster"
                src={`https://image.tmdb.org/t/p/w500/${item.profile_path}`}
                width="100px"
              ></img>
              <p>{item.name}</p>
              <p>{item.character}</p>
            </li>
          );
        })}
    </>
  );
};

export default Cast;
