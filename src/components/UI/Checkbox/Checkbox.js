import React from "react";
import "./Checkbox.scss"

export const Checkbox = ({ onChange, checked, name, label, error }) => {

  return (
    <div className="checkbox">
      <input onChange={onChange} type="checkbox" checked={checked} id={name} name={name} />
      <label className={error ? "checkbox-label-error" : ""} htmlFor={name}>{label}</label>
    </div>
  )
}
