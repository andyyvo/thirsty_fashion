import React, { useState } from "react";

/**
 * andy's first rating component in react
 * this is for the homepage-survey section
 * I want to include props to allow myself to change the iconography (ratingItemOn and ratingItemOff)
 * and a number for the scaling of the rating (ratingMax)
 * and optional rating align (ratingAlign -> left, center, align)
 * and optional text (ratingText)
 * and optional button trigger (ratingTrigger) -> this will trigger immediately on a rating click rather than form submission style
 * -> ratingTrigger takes index so it sends parent level rating number value
 * ratingSelected can be a prop overwritten but changes state to 1 onClick
 */

export const Rating = (props) => {
  /** state to set rating value from 0 to props.ratingMax */
  const [rating, setRating] = useState(0);
  /** state to set mouse hover rating value from 0 to whatever the mouse is on */
  const [hover, setHover] = useState(0);
  /** state to indicate if a rating has been selected */
  const [ratingSelected, setRatingSelected] = useState(0);

  /** rating alignment classname */
  const ratingAlignName = () => {
    if (props.ratingAlign === "left") {
      return "rating left";
    } else if (props.ratingAlign === "center") {
      return "rating center";
    } else if (props.ratingAlign === "right") {
      return "rating right";
    }
  }

  /** rating selected classname */
  const ratingSelectedName = () => {
    if (ratingSelected === 0) {
      return "notSelected";
    } else if (ratingSelected === 1) {
      return "selected";
    }
  }

  return (
    <div className={ratingAlignName() + " " + ratingSelectedName()}>
      <div className="rating-bar">
        {[...Array(props.ratingMax)].map((val, index) => {
          index += 1;
          return (
            <button
              type="button"
              key={index}
              className={"rating-item " + (index <= (hover || rating) ? "on" : "off")}
              onClick={() => {
                props.ratingTrigger(index);
                setRating(index);
                setRatingSelected(1);
              }}
              onMouseEnter={() => setHover(index)}
              onMouseLeave={() => setHover(rating)}
            >
              <span className="rating-item-span">
                {index <= (hover || rating) ? 
                  (props.ratingItemOn) :
                  (props.ratingItemOff)
                }
              </span>
            </button>
          );
        })}
      </div>
      {props.ratingText && (
        <div className="rating-text">
          <p className="avenir">{hover} {props.ratingText}</p>
        </div>
      )}
    </div>
  );
}