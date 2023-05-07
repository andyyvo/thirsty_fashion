import React, { useEffect, useState } from "react";

/** 
 * pouring animation effect
 * the idea is a rectangle falling down from the screen
 * not an svg, just a rectangle div
 * 
 * inspo: https://medium.com/swlh/css-animations-with-react-hooks-1d855dab4a3
 * https://stackoverflow.com/questions/29738787/filling-water-animation
*/

export const Pour = (props) => {
  /** pouring animation state */
  const [animation, setAnimation] = useState(0);
  /** toggle prop to activate animation (false -> true if toggled) */
  const toggle = props.toggle;

  /** watching for updates to trigger animation */
  useEffect(() => {
    renderAnimations() // animates on toggle === true
  }, [toggle]);

  /** animation rendering based on toggle activation */
  const renderAnimations = () => {
      return toggle ? setAnimation(1) : setAnimation(0)
  }

  return (
    <div className="pourAnimation" animation={animation}></div>
  )
}