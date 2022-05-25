import React from "react";
import "./Filter.scss";
import { InputRadio } from "../UI/InputRadio/InputRadio";
import { InputText } from "../UI/InputText/InputText";

export const Filter = ({ age, changeAge, gender, changeGender, minAge, changeMinAge, maxAge, changeMaxAge, setMaxAge, setMinAge }) => {

  const resetFilterPrice = () => {
    setMinAge("");
    setMaxAge("");
  }

  return (
    <div className="filter">
      <div>
        <div className="filter-wrapper">
          <h4 className="filter-title">Возраст</h4>
          <InputRadio onChange={changeAge} value={age} nameLabel="children" textLabel="Детям" />
          <InputRadio onChange={changeAge} value={age} nameLabel="grownup" textLabel="Взрослым" />
        </div>

        <div className="filter-wrapper">
          <h4 className="filter-title">Пол</h4>
          <InputRadio onChange={changeGender} value={gender} nameLabel="male" textLabel="Муж" />
          <InputRadio onChange={changeGender} value={gender} nameLabel="female" textLabel="Жен" />
        </div>
        <div className="filter-wrapper">
          <h4 className="filter-title">
            Цена
            {minAge || maxAge ? <span onClick={resetFilterPrice}>Сбросить</span> : ''}
          </h4>
          <div className="inputsBlock">
            <InputText value={minAge} label="От" placeholder="100" onChange={changeMinAge} />
            <InputText value={maxAge} label="До" placeholder="1000" onChange={changeMaxAge} />
          </div>
        </div>
      </div>
    </div>
  )
}
