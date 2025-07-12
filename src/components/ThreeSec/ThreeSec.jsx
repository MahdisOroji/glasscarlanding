import React, {useEffect} from 'react'
import Styled from "./ThreeSec.module.css"
import Image from "../../assets/Image/card1img.avif"
import AOS from 'aos';
import 'aos/dist/aos.css';

const ThreeSec = () => {
    useEffect(() => {
        AOS.init({
          duration: 1000, // مدت زمان انیمیشن
          once: true, // فقط یک‌بار اجرا بشه
        });
      }, []);
    return (
        <div className={Styled.threeSecWrapper}>
            <div className={Styled.imgCard} data-aos="fade-left" >
                <img src={Image} alt="" />
            </div>
            <div className={Styled.cardCall}>
            <div className={Styled.card} data-aos="fade-right">
                <h3>
                    خدمات ترمیم شیشه اتومبیل در نزدیکی شما
                </h3>
                <span>
                    لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد. کتابهای زیادی در شصت و سه درصد گذشته، حال و آینده شناخت فراوان جامعه و متخصصان را می طلبد تا با نرم افزارها شناخت بیشتری را برای طراحان رایانه ای علی الخصوص طراحان خلاقی و فرهنگ پیشرو در زبان فارسی ایجاد کرد.
                </span>
            </div>

            <div className={Styled.callWrapper}>
                <button className={Styled.callButton} data-aos="fade-right">
                    <span>
                        همین حالا تماس بگیرید
                    </span>
                </button>
            </div>
            </div>

        </div>
    )
}

export default ThreeSec