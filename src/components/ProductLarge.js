import React from "react";
import Product from "../assets/images/categories/product-large.png";
import { ReactComponent as Heart } from "../assets/icons/heart.svg";
import { ReactComponent as HeartFavorite } from "../assets/icons/heart-favorite.svg";
import { ReactComponent as Star } from "../assets/icons/star.svg";
import { useGallery } from "../contexts/gallery-context";

const ProductLarge = ({ info }) => {
  const { toggleFavorite } = useGallery();
  return (
    <div className="product-large">
      <div className="product-large__block">
        <a href="#!" className="product-large__link">
          <img
            src={info.thumbImage}
            alt="Product Large"
            className="product-large__img"
          />
        </a>

        <button>
          <div
            className="product-large__icon"
            onClick={() => toggleFavorite(info.id)}
          >
            {info.isFavorite ? (
              <HeartFavorite className="product-large__heart product-large__heart--favorite"></HeartFavorite>
            ) : (
              <Heart className="icon product-large__heart "></Heart>
            )}
          </div>
        </button>
      </div>
      <div className="product-large__content">
        <h3 className="product-large__heading">
          <a href="#!" className="product-large__link">
            {info.title}
          </a>
        </h3>
        <div className="product-large__brand">{info.brand}</div>
        <div className="flex justify-between">
          <div className="product-large__price">${info.price}</div>
          <div className="product-large__rating">
            <Star></Star>
            <div className="product-large__core">{info.rating}</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductLarge;
