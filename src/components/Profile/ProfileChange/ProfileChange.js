import React, {useEffect, useState} from "react";
import "./ProfileChange.scss";
import {Button} from "../../UI/Button/Button";
import {useNavigate} from "react-router-dom";
import {mockProfile} from "../../../mock/mockProfile";
import {Spinner} from "../../UI/Spinner/Spinner";
import {InputText} from "../../UI/InputText/InputText";
import {Select} from "../../UI/Select/Select";
import {validatePhone} from "../../../utils/validateFunctions";

export const ProfileChange = () => {
  const navigate = useNavigate();
  const goBack = () => navigate(-1);

  const [profile, setProfile] = useState(null);
  const [name, setName] = useState('');
  const [nameError, setNameError] = useState(false);
  const [phone, setPhone] = useState('');
  const [phoneError, setPhoneError] = useState(false);
  const [email, setEmail] = useState('');
  const [emailError, setEmailError] = useState(false);
  const [address, setAddress] = useState('');
  const [addressError, setAddressError] = useState(false);
  const [birthdate, setBirthdate] = useState('');
  const [birthdateError, setBirthdateError] = useState(false);
  const [gender, setGender] = useState('');
  const [genderError, setGenderError] = useState(false);
  const [genderSelect, setGenderSelect] = useState(false);

  useEffect(() => {
    // имитация запроса к api за данными
    new Promise(async () => {
      await setTimeout(() => {
        setProfile({mockProfile})
        setName(mockProfile.name);
        setPhone(validatePhone(mockProfile.phone));
        setEmail(mockProfile.email);
        setAddress(mockProfile.address);
        setBirthdate(mockProfile.birthdate);
        setGender(mockProfile.gender);
      }, 3000);
    }).then();
  }, []);

  const onChange = (e, element, elementError) => {
    elementError(false);
    element(e.target.value)
  }

  const handlerPhone = (e) => {
    setPhoneError(false);
    setPhone(validatePhone(e.target.value));
  }

  const onSubmit = () => {
    console.log(phone.length)
    if (name.length <= 0) setNameError(true);
    if (phone.length < 16) setPhoneError(true);
    if (email.length <= 0) setEmailError(true);
    if (address.length <= 0) setAddressError(true);
    if (birthdate.length <= 0) setBirthdateError(true);
    if (gender.length <= 0) setGenderError(true);

    if (
      name.length > 0
      && phone.length === 16
      && email.length > 0
      && address.length > 0
      && birthdate.length > 0
      && gender.length > 0
    ) {
      navigate("/profile");
      console.log({name, phone, email, address, birthdate, gender});
    }
  }

  if (!profile) return <Spinner />

  return (
    <div className="container">
      <div>
        <Button onClick={goBack}>Назад</Button>
        <div className="profile-change-container">
          <div className="profile-item">
            <h3>Имя</h3>
            <InputText value={name} onChange={(e) => onChange(e, setName, setNameError)} error={nameError} />
          </div>
          <div className="profile-item">
            <h3>Телефон</h3>
            <InputText value={phone} onChange={handlerPhone} error={phoneError} textError="Не корректный номер телефона" />
          </div>
          <div className="profile-item">
            <h3>Email</h3>
            <InputText value={email} onChange={(e) => onChange(e, setEmail, setEmailError)} error={emailError} />
          </div>
          <div className="profile-item">
            <h3>Адрес</h3>
            <InputText value={address} onChange={(e) => onChange(e, setAddress, setAddressError)} error={addressError} />
          </div>
          <div className="profile-item">
            <h3>Дата рождения</h3>
            <InputText value={birthdate} onChange={(e) => onChange(e, setBirthdate, setBirthdateError)} error={birthdateError} />
          </div>
          <div className="profile-item">
            <h3>Пол</h3>
            <Select
              value={gender}
              openSelect={genderSelect}
              setValue={setGender}
              setOpenSelect={setGenderSelect}
              array={["Мужской", "Женский"]}
              error={genderError}
              setError={setGenderError}
            />
          </div>
          <div className="profile-change-btn">
            <Button onClick={onSubmit}>Сохранить</Button>
          </div>
        </div>
      </div>
    </div>
  )
}
