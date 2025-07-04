import React, { useState } from "react";
import Styled from "../Header/Header.module.css"
import Logo from "../assets/Image/autoglass_canada_1.webp"

function Header() {
    return (

        <div className={Styled.headerWrapper}>

            <div>
                <ul className={Styled.header}>
                    <li><a href="#" className={Styled.headerLink}>تماس</a></li>
                    <li><a href="#" className={Styled.headerLink}>سوالات متداول</a></li>
                    <li><a href="#" className={Styled.headerLink}>وبلاگ</a></li>
                    <li><a href="#" className={Styled.headerLink}>آدرس</a></li>
                    <li><a href="#" className={Styled.headerLink}>خدمات در محل</a></li>
                    <li><a href="#" className={Styled.headerLink}>ترمیم شیشه اتوموبیل</a></li>
                    <li><a href="#" className={Styled.headerLink}>تعویض شیشه اتوموبیل</a></li>
                </ul>

            </div>

            <div className={Styled.logo}>
                <img src={Logo} alt="" className={Styled.logoImage} />
            </div>
            
        </div>


    )
};

export default Header;