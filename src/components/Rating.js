import React, { useState } from 'react';
import { FaStar } from 'react-icons/fa';
import Star from './Star';

function Rating(){
  const [rating, setRating] = useState(0);

  const handleClick = (index) => {
    setRating(index + 1);
  };
  const ratingStars = ['Rate Us', 'Terrible', 'Fair', 'Good', 'Very Good', 'Excellent'];

  return (
    <div>
      <h2>{ratingStars[rating]}</h2>
      <div className="star-rating">
        {[...Array(5)].map((_, index) => (
           <Star 
           key={index} 
           selected={index < rating} 
           onClick={() => handleClick(index)} 
         />
        ))}
      </div>
    </div>
  );
};

export default Rating;
