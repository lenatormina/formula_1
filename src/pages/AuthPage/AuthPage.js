import React, {useContext, useState} from "react";
import "./AuthPage.scss";
import {Button} from "../../components/UI/Button/Button";
import {AuthContext} from "../../App";
import {useNavigate} from "react-router-dom";
import {InputText} from "../../components/UI/InputText/InputText";
import {Select} from "../../components/UI/Select/Select";
import {validatePhone} from "../../utils/validateFunctions";
import {Checkbox} from "../../components/UI/Checkbox/Checkbox";

export const AuthPage = () => {
  const { setIsAuth } = useContext(AuthContext);
  const navigate = useNavigate();
  const goBack = () => navigate("/");

  const [isOpenCodePhone, setIsOpenCodePhone] = useState(false);
  const [codePhone, setCodePhone] = useState("+7");
  const [phone, setPhone] = useState('');
  const [phoneError, setPhoneError] = useState(false);
  const [phoneTextError, setPhoneTextError] = useState(null);
  const [contract, setContract] = useState(false);
  const [contractError, setContractError] = useState(false);

  const handlerPhone = (e) => {
    setPhoneError(false);
    setPhoneTextError(null);
    setPhone(validatePhone(e.target.value));
  }

  const onSubmit = () => {
    if (phone.length < 16) {
      setPhoneTextError('Не корректный номер телефона')
      setPhoneError(true)
    }

    if (!contract) {
      setContractError(true)
    }

    if (phone.length === 16 && contract) {
      setIsAuth(true);
      console.log(phone);
      navigate("/");
    }
  }

  return (
    <div className="container">
      <div className="auth">
        <Button onClick={goBack}>Назад</Button>
        <div className="auth-block">
          <h1>Войти или создать профиль</h1>
          <div className="auth-phone">
            <div>Контактный телефон</div>
            <div className="auth-phone-input">
              <Select
                setError={() => {}}
                array={["+7"]}
                value={codePhone}
                setValue={setCodePhone}
                openSelect={isOpenCodePhone}
                setOpenSelect={setIsOpenCodePhone}
              />
              <InputText value={phone} onChange={handlerPhone} error={phoneError} textError={phoneTextError} />
            </div>
          </div>
          <Checkbox
            error={contractError}
            checked={contract}
            onChange={() => [setContract(!contract), setContractError(false)]}
            name="contract"
            label="Согласен с условиями Правил пользования товарной площадкой и правилами возврата"
          />
          <div className="auth-block-btn">
            <Button onClick={onSubmit}>Войти</Button>
          </div>
        </div>
      </div>
    </div>
  )
}
