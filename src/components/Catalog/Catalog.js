import React from "react";
import { ProductCard } from "../Product/ProductCard";
import { Spinner } from "../UI/Spinner/Spinner";

import "./Catalog.css";

export const Catalog = ({ catalog, loading }) => {

  if (loading) return <Spinner />

  return (
    <div className="catalog-wrapper">
      {catalog.map((product) => (
        <ProductCard key={product.id} product={product}/>
      ))}
    </div>
  )
}
