import React from "react";
import Hero from "../components/Hero";
import ProductMini from "../components/ProductMini";

const Home = () => {
  return (
    <div className="home">
      <div className="container">
        <div className="home__container">
          <Hero></Hero>
          <section className="home-category">
            <h2 className="home-category__heading">Browse Categories</h2>
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
        </div>
      </div>
    </div>
  );
};

export default Home;
