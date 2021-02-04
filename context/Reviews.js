import React, { createContext, useState } from 'react';
import firebase from 'firebase';
import 'firebase/firestore';

export const ReviewsContext = createContext();

export default function Reviews({ children }) {
  const [reviews, setReviews] = useState('');
  const saveReview = async (review, playgroundId) => {
    try {
      firebase
        .firestore()
        .collection('playgrounds')
        .doc(playgroundId)
        .collection('reviews')
        .add({ review });
    } catch (error) {
      console.log('error: ', error);
    }
  };

  const getReviews = async (review, playgroundId) => {
    try {
      const list = [];
      var snapshot = await firebase
        .firestore()
        .collection('playgrounds')
        .get()
        .doc(playgroundId)
        .collection('review');
      snapshot.forEach((doc) => {
        list.push(doc.data());
      });
      setReviewsList(list);
    } catch (e) {
      setErrorMessage('No playgrounds');
    }
  };

  return (
    <ReviewsContext.Provider value={{ saveReview, getReviews }}>
      {children}
    </ReviewsContext.Provider>
  );
}
