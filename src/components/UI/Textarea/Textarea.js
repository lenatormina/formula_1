import React from "react";
import "./Textarea.scss";

export const Textarea = ({ value, setValue, error, setError }) => {

  const handlerChange = (event) => {
    setError(false)
    setValue(event.target.value)
  }

  return (
    <div className="textarea-wrapper">
      <textarea
        value={value}
        onChange={handlerChange}
        className={error ? "textarea-error textarea" : "textarea"}
      />
      {error && <div className="textarea-text-error">Заполните поле</div>}
    </div>

  )
}
