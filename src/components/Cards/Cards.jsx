import React, {useEffect} from 'react'
import Styled from "./Cards.module.css"
import icon from "../../assets/Image/iconcar.png"
import AOS from "aos"

const Cards = () => {

    useEffect(() => {
        AOS.init({
          once: true     
        });
      }, []);

    return (

        <div className={Styled.cardWrapper}>
            <div className={Styled.card} data-aos="flip-right">
                <img src={icon} className={Styled.icon} alt="icon"/>
                <span>سریع و مطمئن</span>
            </div>
            <div className={Styled.card} data-aos="flip-right">
                <img src={icon} className={Styled.icon} alt="icon"/>
                <span>تضمین کیفیت</span>
            </div>
            <div className={Styled.card} data-aos="flip-right">
                <img src={icon} className={Styled.icon} alt="icon"/>
                <span>پشتیبانی حرفه‌ای</span>
            </div>
            <div className={Styled.card} data-aos="flip-right">
                <img src={icon} className={Styled.icon} alt="icon"/>
                <span>قیمت مناسب</span>
            </div>
        </div>

    )
}

export default Cards;