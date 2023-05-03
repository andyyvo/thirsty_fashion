import React from "react";

/**
 * just a button component. simple as that :)
 * copied and modified from andyyvo-react js components instead of ts
 */

export const Button = (props) => {
  /** button variant
   * 3 types: primary, secondary, link
   */
  const ButtonVariant = (variant) => {
    if (variant === "primary") {
      return "btn-var-primary";
    } else if (variant === "secondary") {
      return "btn-var-secondary";
    } else {
      return "btn-var-link";
    }
  }

  /** button color */
  const ButtonColor = (color) => {
    return `btn-color-${color}`;
  }

  return (
    <button
      className={
        ButtonVariant(props.variant) + " " +
        ButtonColor(props.color)
      }
    >
      {props.children}
    </button>
  )
}
