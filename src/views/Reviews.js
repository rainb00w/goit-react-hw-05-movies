import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import * as FetchApi from '../services/FetchApi';
import styles from './views.module.css';

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

  // console.log('REVIEWS', reviews);
  return (
    <div className={styles.reviewsContainer}>
      {reviews && reviews.length > 0
        ? reviews.map(item => {
            return (
              <li key={item.id} className={styles.listItem}>
                <p className={styles.boldFont}>{item.author}</p>
                <p>{item.content}</p>
              </li>
            );
          })
        : `We don't have any review for this movie`}
    </div>
  );
};

export default Reviews;
