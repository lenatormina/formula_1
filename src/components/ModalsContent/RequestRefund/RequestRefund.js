import React, {useContext, useState} from "react";
import { Select } from "../../UI/Select/Select";
import { Textarea } from "../../UI/Textarea/Textarea";
import { Button } from "../../UI/Button/Button";
import { ModalContext } from "../../../context/modal-context";
import { InputText } from "../../UI/InputText/InputText";

import "./RequestRefund.scss";

export const RequestRefund = () => {
  const { closeModal } = useContext(ModalContext);

  const [order, setOrder] = useState("");
  const [errorOrder, setErrorOrder] = useState(false);

  const [selectedTheme, setSelectedTheme] = useState("");
  const [questionText, setQuestionText] = useState("")
  const [openSelect, setOpenSelect] = useState(false);
  const [errorTheme, setErrorTheme] = useState(false);
  const [errorText, setErrorText] = useState(false);

  const listQuestions = ["Брак", "Другая"];

  const onchangeOrder = (event) => {
    setOrder(event.target.value);
    setErrorOrder(false);
  }

  const handleSubmit = () => {
    if (order.length === 0) {
      setErrorOrder(true);
    }

    if (selectedTheme.length === 0) {
      setErrorTheme(true);
    }

    if (questionText.length === 0) {
      setErrorText(true);
    }

    if (selectedTheme.length > 0 && questionText.length > 0) {
      console.log('Cообщение отправлено');
      closeModal();
    }
  }

  return (
    <div className="createMassage-wrapper">
      <h2>Заявка на возврат</h2>
      <div className="createMassage-content">
        <h3>Номер заказа</h3>
        <InputText value={order} onChange={onchangeOrder} error={errorOrder} />
      </div>
      <div className="createMassage-content">
        <h3>Причина возврата</h3>
        <Select
          setError={setErrorTheme}
          error={errorTheme}
          openSelect={openSelect}
          setOpenSelect={setOpenSelect}
          array={listQuestions}
          setValue={setSelectedTheme}
          value={selectedTheme}
        />
      </div>
      <div className="createMassage-content">
        <h3>Описание брака или другой причины</h3>
        <Textarea
          setError={setErrorText}
          error={errorText}
          value={questionText}
          setValue={setQuestionText}
        />
      </div>
      <Button onClick={handleSubmit}>Отправить</Button>
    </div>
  )
}
