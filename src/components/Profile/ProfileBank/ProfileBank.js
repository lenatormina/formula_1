import React, {useContext, useState} from "react";
import "./ProfileBank.scss";
import {Button} from "../../UI/Button/Button";
import {useNavigate} from "react-router-dom";
import {InputText} from "../../UI/InputText/InputText";
import {onlyNumber, validateBankCard} from "../../../utils/validateFunctions";
import {ModalContext} from "../../../context/modal-context";
import {SaveBankCard} from "../../ModalsContent/SaveBankCard/SaveBankCard";

export const ProfileBank = () => {
  const navigate = useNavigate();
  const { openedModal } = useContext(ModalContext);

  const goBack = () => navigate("/profile");

  const [saveCard, setSaveCard] = useState(null);

  const [card, setCard] = useState('');
  const [cardError, setCardError] = useState(false);

  const [month, setMonth] = useState('');
  const [monthError, setMonthError] = useState(false);

  const [year, setYear] = useState('');
  const [yearError, setYearError] = useState(false);

  const [cvc, setCvc] = useState('');
  const [cvcError, setCvcError] = useState(false);

  const onChangeCard = (e) => {
    setCardError(false)
    setCard(validateBankCard(e.target.value))
  }

  const onChange = (e, element, max, elemError) => {
    elemError(false);
    element(onlyNumber(e.target.value, max))
  }

  const onSubmit = () => {
    setSaveCard({ card, month, year, cvc });
    console.log({ card, month, year, cvc });
    navigate("/profile");
  }

  const onRequestSubmit = () => {
    if (card.length < 19) setCardError(true);
    if (month.length < 1 || +month > 12 || +month === 0) setMonthError(true);
    if (year.length < 4) setYearError(true);
    if (cvc.length < 3) setCvcError(true);

    if (card.length === 19 && month.length >= 1 && month <= 12 && year.length === 4 && cvc.length === 3) {
      openedModal({
        children: <SaveBankCard onSubmit={onSubmit} />,
      })
    }
  }

  return (
    <div className="container">
      <div>
        <Button onClick={goBack}>Назад</Button>
        <div className="profile-bank-container">
          <div className="bank-card-cvc">
            <div className="bank-card-cvc_magnet" />
            <div className="profile-item">
              <InputText
                value={cvc}
                onChange={(e) => onChange(e, setCvc, 3, setCvcError)}
                error={cvcError}
                textError=" "
              />
              <h3>CVC/CVV</h3>
            </div>
          </div>
          <div className="bank-card-face">
            <div className="profile-item">
              <InputText value={card} onChange={onChangeCard} error={cardError} textError="Ошибка"/>
              <h3>Номер карты</h3>
            </div>
            <div className="bank-card-face_date">
              <div className="profile-item">
                <InputText
                  value={month}
                  onChange={(e) => onChange(e, setMonth, 2, setMonthError)}
                  error={monthError}
                  textError=" "
                />
                <h3>Месяц</h3>
              </div>
              <div className="date-slash"> / </div>
              <div className="profile-item">
                <InputText
                  error={yearError}
                  textError=" "
                  value={year}
                  onChange={(e) => onChange(e, setYear, 4, setYearError)}
                />
                <h3>Год</h3>
              </div>
            </div>
          </div>
        </div>
        <div className="profile-bank-btn">
          <Button onClick={onRequestSubmit}>Привязать</Button>
        </div>
      </div>
    </div>
  )
}
