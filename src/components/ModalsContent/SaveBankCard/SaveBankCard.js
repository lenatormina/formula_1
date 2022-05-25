import React, {useContext} from "react";
import "./SaveBankCard.scss";
import {Button} from "../../UI/Button/Button";
import {ModalContext} from "../../../context/modal-context";

export const SaveBankCard = ({ onSubmit }) => {
  const { closeModal } = useContext(ModalContext);

  return (
    <div className="save-bank-modal">
      <p>Вы действительно хотите привязать новую карту? Это действие удалит привязанную ранее карту</p>
      <Button onClick={() => [onSubmit(), closeModal()]}>Да</Button>
      <Button onClick={closeModal}>Отмена</Button>
    </div>
  )
}
