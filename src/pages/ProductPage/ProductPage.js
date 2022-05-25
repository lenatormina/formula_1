import React, {useContext, useEffect, useState} from "react";
import { useParams, useNavigate } from "react-router-dom";
import { useHttpClient} from "../../api/useHttpClient";
import { Button} from "../../components/UI/Button/Button";
import { Spinner } from "../../components/UI/Spinner/Spinner";
import "./ProductPage.scss";
import {BasketContext} from "../../context/basket-context";

export const ProductPage = () => {
  const { loading, request } = useHttpClient();
  const { id } = useParams();
  const navigate = useNavigate();
  const goBack = () => navigate(-1);
  const { addItemBasket } = useContext(BasketContext);

  const [product, setProduct] = useState(null);
  const mockSize = [ //доступная размерность у продукта, затем брать из product.size
    { name: "x", count: 0 },
    { name: "m", count: 2 },
    { name: "l", count: 0 },
    { name: "xl", count: 1 },
    { name: "xxl", count: 2 },
    { name: "xxxl", count: 0 },
  ]

  useEffect(() => {
    request(`catalog/${id}`, 'GET').then(res => {
      setProduct({...res, sizes: mockSize});
    });
  }, [id, request]);

  const [selectedSize, setSelectedSize] = useState('');
  const [basketDisabled, setBasketDisabled] = useState(true);
  const [errorSizes, setErrorSizes] = useState(false);

  useEffect(() => {
    product?.sizes.map((item) => {
      if (item.count > 0) setBasketDisabled(false)
    })
  }, [product?.sizes])

  const addBasket = () => {
    if (!selectedSize) {
      setErrorSizes(true);
      return;
    }
    addItemBasket(product, id, selectedSize);
    setSelectedSize('');

    let count = 0;
    product?.sizes.map((item) => count = count + item.count)
    if (count === 0) setBasketDisabled(true)
  }

  const classNameProductSize = (item) => {
    if (errorSizes && item.count > 0) return "product-size-error product-size-button"
    if (selectedSize === item.name) return "product-size_active product-size-button"
    if (item.count <= 0) return "product-size_disabled product-size-button"
    return "product-size-button"
  }

  return (
    <div className="container product">
      <Button onClick={goBack}>Назад</Button>
      <div className="product-wrapper">
        {loading
          ? <Spinner />
          : (
            <>
              <h1>{product?.categories} "{product?.name}"</h1>
              <div className="product-img-wrapper">
                <img src={product?.img} alt={product?.name}/>
                <div className="product-size">
                  <h3 className="product-size-title">Таблица размеров</h3>
                  <div className="product-size-btn-group">
                    {product?.sizes.map((item, i) => (
                      <div
                        key={item.name}
                        className={classNameProductSize(item)}
                        onClick={() => {
                          if (item.count > 0) {
                            product.sizes[i].count = product.sizes[i].count - 1
                            setSelectedSize(item.name);
                            setErrorSizes(false);
                          }
                        }}
                      >
                        { item.name }
                      </div>
                    ))}
                  </div>
                  {basketDisabled && <div className="product-null">Товар отсутствует</div>}
                  <Button disabled={basketDisabled} onClick={addBasket}>В корзину</Button>
                </div>
              </div>
              <h2>Описание</h2>
              <p>{product?.description}</p>
            </>
          )
        }
      </div>
    </div>
  )
}
