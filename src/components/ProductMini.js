import React from "react";
import Cate from "../assets/images/categories/cate-1.png";

const ProductMini = () => {
  return (
    <article class="product-mini">
      <img src={Cate} alt="" class="product-mini__thumb" />
      <div class="product-mini__info">
        <h3 class="product-mini__title">$24 - $150</h3>
        <p class="product-mini__desc">New sumatra mandeling coffe blend</p>
      </div>
    </article>
  );
};

export default ProductMini;
