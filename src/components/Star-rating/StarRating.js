import React, { useState } from "react";


const StarRating = () => {
const [rating, setRating] = useState(0);
const [hoverRating, setHoverRating] =useState(0);

const handleStarClick = (selectedRating) => {
  setRating(selectedRating === rating ? 0 : selectedRating)
};

const handleStarHover = (hoverRating) => {
 setHoverRating(hoverRating);
};

const resetHoverRating = () => {
  setHoverRating(0);
};
 

  return (  
    <div className="star-rating">
    <div>
    {[...Array(10)].map((_, index) => (
     <span key={index} className={`star ${index +1 <= (hoverRating || rating) ? "filled" : ""}`}
     onClick={() => handleStarClick(index + 1)}
     onMouseEnter={() => handleStarHover( index = 1)}
     onMouseLeave={resetHoverRating}> 
     &#9733;
     </span>
   ))}
    </div>
    <div>
    </div>
   <p>Selected rating: {rating}</p>
    </div>
  );
}
 
export default StarRating ;