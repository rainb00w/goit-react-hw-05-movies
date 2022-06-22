import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import * as FetchApi from '../FetchApi/FetchApi';

const Reviews = () => {
  const [reviews, setReviews] = useState(null);
  const { itemId } = useParams();

  useEffect(() => {
    FetchApi.FetchMovieReviews(itemId)
      .then(movieInfo => setReviews(movieInfo.data.results))
      .catch(error => {
        console.log(error);
      });
  }, [itemId]);

  return (
    <>
      {' '}
      {reviews &&
        reviews.map(item => {
          return (
            <li key={item.id}>
              <p>{item.author}</p>
              <p>{item.content}</p>
            </li>
          );
        })}
    </>
  );
};

export default Reviews;
