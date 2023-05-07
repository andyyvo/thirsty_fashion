import React, { useEffect, useState } from "react";
import { ReactComponent as Wave } from "../../assets/images/wave_animation.svg";

/**
 * filling animation effect of the wave
 * the idea is to have a wave go up from bottom to top of screen
 * wave is svg file
 * 
 * inspo: https://medium.com/swlh/css-animations-with-react-hooks-1d855dab4a3
 * https://stackoverflow.com/questions/29738787/filling-water-animation
 */

export const Fill = (props) => {
  /** filling animation state */
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
    <div className="fillAnimation" animation={animation}>
      <Wave />
    </div>
  )
}