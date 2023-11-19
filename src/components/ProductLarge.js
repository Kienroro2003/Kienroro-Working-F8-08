import React from "react";
import Product from "../assets/images/categories/product-large.png";
import { ReactComponent as Heart } from "../assets/icons/heart.svg";
import { ReactComponent as Star } from "../assets/icons/star.svg";

const ProductLarge = () => {
  return (
    <div className="product-large">
      <div className="product-large__block">
        <img src={Product} alt="Product Large" className="product-large__img" />
        <div className="product-large__icon">
          <Heart className="icon"></Heart>
        </div>
      </div>
      <div className="product-large__content">
        <h3 className="product-large__heading">
          Coffee Beans - Espresso Arabica and Robusta Beans
        </h3>
        <div className="product-large__brand">Lavazza</div>
        <div className="flex justify-between">
          <div className="product-large__price">$47.00</div>
          <div className="product-large__rating">
            <Star></Star>
            <div className="product-large__core">5.0</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductLarge;
