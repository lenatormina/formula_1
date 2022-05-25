import React, {useContext} from "react";
import { useNavigate } from 'react-router-dom';
import { Button } from "../../components/UI/Button/Button";
import { ModalContext } from "../../context/modal-context";
import { CreateMassage } from "../../components/ModalsContent/CreateMassage/CreateMassage";

import "./SupportPage.scss"
import {RequestRefund} from "../../components/ModalsContent/RequestRefund/RequestRefund";

export const SupportPage = () => {
  const navigate = useNavigate();
  const { openedModal } = useContext(ModalContext);

  const goBack = () => navigate(-1);

  const openMassage = () => {
    openedModal({
      children: <CreateMassage />,
    });
  }

  const openRequestRefund = () => {
    openedModal({
      children: <RequestRefund />,
    });
  }

  return (
    <div className="container support">
      <Button onClick={goBack}>Назад</Button>
      <p>
        В этом разделе вы можете оставить свое обращение,<br/>
        если возникли какие-либо вопросы по работе интернет -<br/>
        магазина Formula 1. Или вы можете создать заявку<br/>
        на возврат приобретенного в нашем магазине товара.
      </p>
      <div className="support-button-wrapper">
        <Button onClick={openMassage}>Создать новое обращение</Button>
        <Button onClick={openRequestRefund}>Создать заявку на возврат товара</Button>
      </div>
    </div>
  )
}
