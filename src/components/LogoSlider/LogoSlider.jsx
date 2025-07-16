import React from 'react';
import Styled from "./LogoSlider.module.css";
import brand1 from '../../assets/Image/bmwtext.png';
import brand2 from '../../assets/Image/Suzuki-Logo-PNG-HD-Isolated.png';
import brand3 from '../../assets/Image/Pagani-Logo-PNG-Pic.png';
import brand4 from '../../assets/Image/benz-logo.png';
import brand5 from '../../assets/Image/Pagani-Logo-PNG-Pic.png';

const brands = [brand1, brand2, brand3, brand4, brand5];

const BrandSlider = () => {
  return (
    <div className={Styled.sliderContainer}>
      <div className={Styled.sliderTrack}>
        {brands.concat(brands).map((logo, i) => (
          <div className={Styled.slide} key={i}>
            <img src={logo} alt={`brand-${i}`} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default BrandSlider;
