// import React, { createContext, useState, useEffect } from 'react';
// import { auth } from '../firebase';
// import firebase from 'firebase';
// import 'firebase/firestore';

// export const Reviews = createContext();

// export default function ReviewsProvider() {

//     const reviews = async () => {
//         try {
//             firebase.firestore()
//                 .collection("reviews")
//                 .doc(firebase.auth().currentUser.uid)
//                 .collection("userReviews")
//                 .orderBy("creation", "asc")
//                 .get()
//                 .then((snapshot) => {
//                     let reviews = snapshot.docs.map(doc => {
//                         const data = doc.data();
//                         const id = doc.id;
//                         return { id, ...data }
//                     })
//                     console.log(reviews)
//                     dispatch({ reviews })
//                 })
//         })
//     }


// }