import React from "react";
import "./InputRadio.css";

export const InputRadio = ({ value, nameLabel, textLabel, onChange, error }) => {
  return (
    <div className={error ? "inputRadio inputRadio-error" : "inputRadio"}>
      <input
        type="radio"
        id={nameLabel}
        name={value}
        value={nameLabel}
        checked={value === nameLabel}
        onChange={onChange}
      />
      <label htmlFor={nameLabel}>{textLabel}</label>
    </div>
  )
}
