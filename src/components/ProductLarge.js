import React from "react";
import Product from "../assets/images/categories/product-large.png";
import { ReactComponent as Heart } from "../assets/icons/heart.svg";
import { ReactComponent as Star } from "../assets/icons/star.svg";

const ProductLarge = () => {
  return (
    <div className="product-large">
      <div className="product-large__block">
        <a href="#!" className="product-large__link">
          <img
            src={Product}
            alt="Product Large"
            className="product-large__img"
          />
        </a>

        <button>
          <div className="product-large__icon">
            <Heart className="icon"></Heart>
          </div>
        </button>
      </div>
      <div className="product-large__content">
        <h3 className="product-large__heading">
          <a href="#!" className="product-large__link">
            Coffee Beans - Espresso Arabica and Robusta Beans
          </a>
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
