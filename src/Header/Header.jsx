import React from "react";
import Styled from "../Header/Header.module.css"

function Header() {
    return (

        <div className={Styled.headerWrapper}>
            <div className="container">
                <ul className={Styled.header}>
                    <li> <a href="#" className={Styled.headerLink}> تماس </a> </li>
                    <li> <a href="#" className={Styled.headerLink}> سوالات متداول </a> </li>
                    <li> <a href="#" className={Styled.headerLink}> وبلاگ </a> </li>
                    <li> <a href="#" className={Styled.headerLink}> آدرس </a> </li>
                    <li> <a href="#" className={Styled.headerLink}> خدمات در محل </a> </li>
                    <li> <a href="#" className={Styled.headerLink}> ترمیم شیشه اتوموبیل </a> </li>
                    <li> <a href="#" className={Styled.headerLink}> تعویض شیشه اتوموبیل </a> </li>
                </ul>
            </div>
            
            <div>
                <img src="" alt="" />
            </div>

        </div>


    )
}

export default Header;