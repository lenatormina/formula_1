import React from "react";
import "./BasketProduct.scss";
import {Button} from "../../UI/Button/Button";
// import img from "../../../assets/img/2022-05-26 07.57.34.jpg"

export const BasketProduct = ({ product, removeProduct }) => {

  const sizes = [];
  product.sizes.map((item) => {
    if (sizes.length > 0 && sizes.find(i => i.name === item)) {
      sizes.map(i => {
        if (i.name === item) i.count++
      })
    } else {
      sizes.push({name: item, count: 1})
    }
  });

  const totalNumber = () => {
    let count = 0;
    sizes.map(item => {
      count = item.count + count;
    })
    return count;
  }

  return (
    <li className="basket-item">
      <div>
        <img className="basket-item-img" src={product.img} alt={product.name}/>
        <Button onClick={() => removeProduct(product.id)}>Удалить</Button>
      </div>
      <div className="basket-item-params">
        <div className="basket-item-price">{product.price} руб.</div>
        <div className="basket-item-name">
          <span>{product.categories} "{product.name}"</span>
          <strong>({totalNumber()}шт.)</strong>
        </div>
        <div>{
          sizes.map((item) => (
            <span
              className="basket-item-size"
              key={item.name}
            >
              {item.name} ({item.count}
              <span>шт.)</span>
            </span>
          ))
        }</div>
      </div>
    </li>
  )
}
