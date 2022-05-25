import React from "react";
import { NavLink, useLocation } from 'react-router-dom';

import "./Footer.scss";

export const Footer = () => {
  const isAuth = true;
  const location = useLocation();
  const isSupport = location.pathname !== '/support'

  return (
    <footer className="footer">
      <div className="container footer-wrapper">
        <div>
          {isAuth && isSupport && <NavLink className="buttonNavLink" to="/support" >Создать обращение</NavLink>}
        </div>
        <div className="copyright">
          &copy; formula 1 - интернет магазин мерча. Все <br/>права защищены. Доставка по всей России.
        </div>
        <div className="contacts">
          <div>Связаться с нами</div>
          <a href="tel:+74952002020">+7 495-200-20-20</a>
          <a href="mailto:contact@merchshop.ru">contact@merchshop.ru</a>
        </div>
      </div>
    </footer>
  )
}
