import React, { useState } from "react";

/**
 * andy's first rating component in react
 * this is for the homepage-survey section
 * I want to include props to allow myself to change the iconography (ratingItemOn and ratingItemOff)
 * and a number for the scaling of the rating (ratingMax)
 * and optional text (ratingText)
 */

export const Rating = (props) => {
  /** state to set rating value from 0 to props.ratingMax */
  const [rating, setRating] = useState(0);
  /** state to set mouse hover rating value from 0 to whatever the mouse is on */
  const [hover, setHover] = useState(0);

  return (
    <div className="rating">
      {[...Array(props.ratingMax)].map((val, index) => {
        index += 1;
        return (
          <button
            type="button"
            key={index}
            className={"rating-item " + (index <= (hover || rating) ? "on" : "off")}
            onClick={() => setRating(index)}
            onMouseEnter={() => setHover(index)}
            onMouseLeave={() => setHover(rating)}
          >
            <span className="rating-item-span">
              {index <= (hover || rating) ? 
                (<img className="rating-item-span-img" src={props.ratingItemOn} alt="rating item" />) :
                (<img className="rating-item-span-img" src={props.ratingItemOff} alt="rating item" />)
              }
            </span>
          </button>
        );
      })}
      {props.ratingText && (
        <div className="rating-text">
          <p className="avenir">{hover} {props.ratingText}</p>
        </div>
      )}
    </div>
  );
}