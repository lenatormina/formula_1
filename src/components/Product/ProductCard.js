import React from "react";
import { NavLink } from "react-router-dom";
import "./ProductCard.scss";

export const ProductCard = ({ product }) => {

  return (
    <NavLink className="productCard-wrapper" to={`/catalog/${product.id}`} >
        <img className="productCard-img" src={product.img} alt={product.name}/>
        <div className="productCard-price" >{product.price} руб.</div>
        <h2 className="productCard-name" >{product.categories} {product.name}</h2>
    </NavLink>
  )
}
