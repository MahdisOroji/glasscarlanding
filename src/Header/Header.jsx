import React, { useState } from "react";
import Styled from "../Header/Header.module.css"
import Logo from "../assets/Image/autoglass_canada_1.webp"

const Header = () => {

    const [isOpen, setIsOpen] = useState(false)
    const handleToggle = () => {
        setIsOpen(!isOpen)
    }

    return (
        <div className={Styled.headerWrapper}>
            <div className={Styled.burgerMenuContainer} onClick={handleToggle}>
                <button className={Styled.burgerMenu}>
                    <span></span>
                    <span></span>
                    <span></span>
                </button>
                {isOpen && (
                    <ul className={Styled.burgerMenuOption}>
                        <li><a href="#" className={Styled.burgerLink}>تماس</a></li>
                        <li><a href="#" className={Styled.burgerLink}>سوالات متداول</a></li>
                        <li><a href="#" className={Styled.burgerLink}>وبلاگ</a></li>
                        <li><a href="#" className={Styled.burgerLink}>آدرس</a></li>
                        <li><a href="#" className={Styled.burgerLink}>خدمات در محل</a></li>
                        <li><a href="#" className={Styled.burgerLink}>ترمیم شیشه اتوموبیل</a></li>
                        <li><a href="#" className={Styled.burgerLink}>تعویض شیشه اتوموبیل</a></li>
                    </ul>
                )}
            </div>

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