import React from "react";
import "./InputText.scss";

export const InputText = ({ value, onChange, label, placeholder, error, textError }) => {

  return (
    <div className={error ? "inputText-error inputText" : "inputText"}>
      <label>{label}</label>
      <input type="text" placeholder={placeholder} onChange={onChange} value={value}/>
      {error && <div className="inputText-text-error">{textError || "Заполните поле"}</div>}
    </div>
  )
}
