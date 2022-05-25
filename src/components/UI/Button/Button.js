import React from "react";
import "./Button.scss"

export const Button = ({ onClick, children, disabled }) => {
  return (
    <button
      disabled={disabled}
      className={disabled ? "button-disabled button" : "button"}
      onClick={onClick}
      type="button"
    >
      {children}
    </button>
  )
};
