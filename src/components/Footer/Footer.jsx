import React from 'react';
import Styled from './Footer.module.css';

const Footer = () => {
  return (
    <div className={Styled.footer}>
      <h3 className={Styled.title}>ارتباط با ما</h3>

      <p><a className={Styled.link} href="tel:+989396192761">+989396192761</a></p>

      <p className={Styled.address}>
        آدرس: میانجاده، ابتدای بلوار امام خمینی، روبه‌روی پمپ بنزین آرین، شیشه اتومبیل امیرحسین
      </p>

      <a
        className={Styled.mapBtn}
        href="https://maps.app.goo.gl/yQjJ65ZrvViSxGaj7?g_st=com.google.maps.preview.copy"
        target="_blank"
        rel="noopener noreferrer"
      >
        باز کردن در گوگل مپ
      </a>
    </div>
  );
};

export default Footer;
