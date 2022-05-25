import React, {useContext, useEffect, useState} from "react";
import "./BasketPage.scss";
import {Button} from "../../components/UI/Button/Button";
import {useNavigate} from "react-router-dom";
import {BasketProduct} from "../../components/Product/BasketProduct/BasketProduct";
import {BasketContext} from "../../context/basket-context";
import {InputRadio} from "../../components/UI/InputRadio/InputRadio";
import {AuthContext} from "../../App";

export const BasketPage = () => {
  const navigate = useNavigate();
  const goBack = () => navigate("/")
  const { isAuth } = useContext(AuthContext);
  const { removeItemBasket, basket, clearBasket } = useContext(BasketContext);
  const removeProduct = (id) => removeItemBasket(id)

  const [choice, setChoice] = useState(null);
  const [choiceError, setChoiceError] = useState(false);
  const onChoice = (event) => [setChoice(event.target.value), setChoiceError(false)];
  const [totalProduct, setTotalProduct] = useState(1);


  const onSubmit = () => {
    if (!choice) {
      setChoiceError(true);
      return;
    }
    if (!isAuth) {
      navigate("/auth")
      return;
    }
    console.log(basket);
    clearBasket();
    navigate("/");
  }

  useEffect(() => {
    let count = 0;
    let price = 0;
    basket.map((item) => {
      count = count + item.sizes.length
      price = count * item.price
    })
    setTotalProduct(price);
  }, [basket]);

  return (
    <div className="container">
      <div className="basket">
        {!basket || basket.length <= 0
          ? (
            <div className="basketNull">
              <h2>В корзине пока ничего нет</h2>
              <p>Выберите товары, которые хотите добавить в<br/> корзину на главной странице</p>
              <Button onClick={() => navigate("/")}>Перейти на главную</Button>
            </div>
          ) : (
            <>
              <Button onClick={goBack}>Назад</Button>
              <div className="basket-container">
                <ul className="basket-list">
                  {
                    basket.map((item) => (
                      <BasketProduct key={item.id} product={item} removeProduct={removeProduct} />
                    ))
                  }
                </ul>
                <div className="basket-results">
                  <div className="basket-total">
                    <span>ИТОГО</span>
                    <span>{totalProduct}руб.</span>
                  </div>
                  <div className="basket-total-choice">Выбрать способ оплаты</div>
                  <InputRadio onChange={onChoice} value={choice} nameLabel="card" textLabel="Картой" error={choiceError} />
                  <InputRadio onChange={onChoice} value={choice} nameLabel="cash" textLabel="Наличными при получении" error={choiceError} />
                </div>
              </div>
              <div className="basket-btn">
                <Button onClick={onSubmit}>Заказать</Button>
              </div>
            </>
          )
        }
      </div>
    </div>
  )
}
