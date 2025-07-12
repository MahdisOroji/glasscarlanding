import React , { useEffect } from 'react'
import icon from "../../assets/Image/iconcar.png"
import Styled from "./LinkIcon.module.css"
import AOS  from 'aos'


const LinkIcon = () => {

    useEffect(() => {
        AOS.init({
          duration: 1000,
          once: true     
        });
      }, []);

    return (
        <div className={Styled.iconWrapper} >
            <div className={Styled.iconBar} data-aos="zoom-in">
                <img src={icon} alt="icon" />
                <span>
                    ورم ایپسوم متن ساختگی با تولید سادگی نامفهوم
                </span>
            </div>

            <div className={Styled.verticalLine} data-aos="zoom-in"></div>

            <div className={Styled.iconBar} data-aos="zoom-in">

                <img src={icon} alt="icon" />
                <span>
                    ورم ایپسوم متن ساختگی با تولید سادگی نامفهوم
                </span>
            </div>

            <div className={Styled.verticalLine} data-aos="zoom-in"></div>

            <div className={Styled.iconBar} data-aos="zoom-in">

                <img src={icon} alt="icon" />
                <span>
                    ورم ایپسوم متن ساختگی با تولید سادگی نامفهوم
                </span>
            </div>

        </div>


    )
}

export default LinkIcon