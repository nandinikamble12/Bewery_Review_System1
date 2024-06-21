// src/context/reviewContext.js
import React, { createContext, useState } from 'react';

export const ReviewContext = createContext();

export const ReviewProvider = ({ children }) => {
  const [reviewId, setReviewId] = useState(null);

  return (
    <ReviewContext.Provider value={{ reviewId, setReviewId }}>
      {children}
    </ReviewContext.Provider>
  );
};
