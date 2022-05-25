import React, {useContext, useEffect, useState} from "react";
import "./Header.scss"
import { Basket } from "../../assets/icons/Basket";
import {NavLink, useLocation } from "react-router-dom";
import {AuthContext} from "../../App";
import {BasketContext} from "../../context/basket-context";

export const Header = () => {
  const { isAuth } = useContext(AuthContext);
  const location = useLocation();
  const isBasketPage = location.pathname !== '/basket';
  const { basket } = useContext(BasketContext);

  const [currentProduct, setCurrentProduct] = useState(0);

  useEffect(() => {
    let count = 0;
    basket.map((item) => {
      count = count + item.sizes.length
    })
    setCurrentProduct(count);
  }, [basket]);

  return (
    <header className="header">
      <div className="container header-container">
        <div className="logo">Formula 1</div>
        {isBasketPage && (
          <div className="block-btn">
            {isAuth
              ? <NavLink className="buttonNavLink" to="/profile" >Профиль</NavLink>
              : <NavLink className="buttonNavLink" to="/auth" >Войти</NavLink>
            }
            <NavLink className="buttonNavLink" to="/basket" >
              <Basket width="20px" height="20px" />
              <span>Корзина</span>
              <div className="btn-currentProduct">{currentProduct}</div>
            </NavLink>
          </div>
        )}
      </div>
    </header>
  )
}
