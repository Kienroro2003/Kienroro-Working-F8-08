import React from "react";
// import { Slide } from "react-hero-image";
import HeroImg from "../assets/images/hero.png";
import HeroImgMd from "../assets/images/hero-md.png";

const Hero = () => {
  return (
    <div class="hero">
      <div class="hero__inner">
        <div class="hero__item">
          <a href="#!" class="hero__link">
            <picture>
              <source media="(max-width: 767.98px)" srcset={HeroImgMd} />
              <img src={HeroImg} alt="" class="hero__img" />
            </picture>
          </a>
        </div>
      </div>

      <div class="hero__page">
        <span class="hero__num">1</span>
        <span class="hero__slider"></span>
        <span class="hero__num">5</span>
      </div>
    </div>
  );
};

export default Hero;
