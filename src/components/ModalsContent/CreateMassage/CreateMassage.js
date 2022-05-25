import React, {useContext, useState} from "react";
import { Select } from "../../UI/Select/Select";
import { Textarea } from "../../UI/Textarea/Textarea";
import { Button } from "../../UI/Button/Button";
import { ModalContext } from "../../../context/modal-context";

import "./CreateMassage.scss";

export const CreateMassage = () => {
  const { closeModal } = useContext(ModalContext);
  const [selectedTheme, setSelectedTheme] = useState("");
  const [questionText, setQuestionText] = useState("")
  const [openSelect, setOpenSelect] = useState(false);
  const [errorTheme, setErrorTheme] = useState(false);
  const [errorText, setErrorText] = useState(false);

  const listQuestions = ["Оплата картой", "Оплата наличными", "Доставка", "Возврат денег", "Замечания", "Работа сайта", "Ассортимент", "Другое"]

  const handleSubmit = () => {
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
      <h2>Создание обращения</h2>
      <div className="createMassage-content">
        <h3>Тема</h3>
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
        <h3>Текст сообщения</h3>
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
