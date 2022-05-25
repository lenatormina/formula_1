import React, {useContext, useEffect, useState} from "react";
import "./ProfilePage.scss";
import { Button } from "../../components/UI/Button/Button";
import {NavLink, useNavigate} from "react-router-dom";
import { AuthContext } from "../../App";
import {Spinner} from "../../components/UI/Spinner/Spinner";
import {mockBank, mockProfile} from "../../mock/mockProfile";
import {validatePhone} from "../../utils/validateFunctions";

export const ProfilePage = () => {
  const { setIsAuth } = useContext(AuthContext);
  const navigate = useNavigate();
  const goBack = () => navigate("/");

  const [profile, setProfile] = useState(null);

  useEffect(() => {
    // имитация запроса
    new Promise(async () => {
      await setTimeout(() => setProfile({mockProfile, mockBank}), 3000);
    }).then();
  }, []);

  if (!profile) return <Spinner />

  return (
    <div className="container">
      <div>
        <Button onClick={goBack}>Назад</Button>
        <div className="profile-container">
          <h2>{mockProfile.name}</h2>
          <div className="profile-item">
            <h3>Телефон</h3>
            <p>{validatePhone(mockProfile.phone)}</p>
          </div>
          <div className="profile-item">
            <h3>Email</h3>
            <p>{mockProfile.email}</p>
          </div>
          <div className="profile-item">
            <h3>Адрес</h3>
            <p>{mockProfile.address}</p>
          </div>
          <div className="profile-item">
            <h3>Дата рождения</h3>
            <p>{mockProfile.birthdate}</p>
          </div>
          <div className="profile-item">
            <h3>Пол</h3>
            <p>{mockProfile.gender}</p>
          </div>
          <NavLink to="/profile/change" >Изменить данные</NavLink>
        </div>
        <div className="profile-container">
          <div className="profile-item">
            <h3>Банковская карта</h3>
            <p>{mockBank.card}</p>
          </div>
          <NavLink to="/profile/bank" >Привязать другую карту</NavLink>
        </div>
        <div className="profile-btn-back">
          <Button onClick={() => [setIsAuth(false), navigate("/")]}>Выйти</Button>
        </div>
      </div>
    </div>
  )
}
