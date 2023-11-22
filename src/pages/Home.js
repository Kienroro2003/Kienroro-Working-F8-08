import React from "react";
import Hero from "../components/Hero";
import ProductMini from "../components/ProductMini";
import ProductLarge from "../components/ProductLarge";
import Filter from "../components/Filter";
import { useGallery } from "../contexts/gallery-context";

const Home = () => {
  const { listItem } = useGallery();
  console.log("🚀 ~ file: Home.js:10 ~ Home ~ listProduct:", listItem);
  return (
    <div className="home">
      <div className="container">
        <div className="home__container">
          <Hero></Hero>
          <section className="home-section">
            <h2 className="home-section__heading">Browse Categories</h2>
            <ul className="home-category__list">
              <li className="home-category__item">
                <ProductMini></ProductMini>
              </li>
              <li className="home-category__item">
                <ProductMini></ProductMini>
              </li>
              <li className="home-category__item">
                <ProductMini></ProductMini>
              </li>
            </ul>
          </section>
          <section className="home-section">
            <div className="flex items-center justify-between">
              <h2 className="home-section__heading">Browse Categories</h2>
              <Filter></Filter>
            </div>
            <ul className="product-large__list">
              {listItem.map((item, index) => {
                return (
                  <li className="home-category__item">
                    <ProductLarge key={item.id} info={item}></ProductLarge>
                  </li>
                );
              })}
              {/* <li className="product-large__item">
                <ProductLarge></ProductLarge>
              </li>
              <li className="product-large__item">
                <ProductLarge></ProductLarge>
              </li>
              <li className="product-large__item">
                <ProductLarge></ProductLarge>
              </li>
              <li className="product-large__item">
                <ProductLarge></ProductLarge>
              </li> */}
            </ul>
          </section>
        </div>
      </div>
    </div>
  );
};

export default Home;
