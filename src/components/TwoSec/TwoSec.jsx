import { useEffect } from "react"
import AOS from "aos"
import 'aos/dist/aos.css';
import image from "../../assets/Image/auto2.jpg"
import Styled from "../TwoSec/TwoSec.module.css"

const TwoSec = () => {

    useEffect(() => {
        AOS.init({
          duration: 1000,
          once: true     
        });
      }, []);

  return (
    <div className={Styled.container}>
        <div className={Styled.textContent} data-aos="fade-right">
            <h1>
            خدمات تعمیر شیشه خودرو و شیشه جلو درجه یک را با ما تجربه کنید
            </h1>
            <span>
            لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد. کتابهای زیادی در شصت و سه درصد گذشته، حال و آینده شناخت فراوان جامعه و متخصصان را می طلبد تا با نرم افزارها شناخت بیشتری را برای طراحان رایانه ای علی الخصوص طراحان خلاقی و فرهنگ پیشرو در زبان فارسی ایجاد کرد. در این صورت می توان امید داشت که تمام و دشواری موجود در ارائه راهکارها و شرایط سخت تایپ به پایان رسد وزمان مورد نیاز شامل حروفچینی دستاوردهای اصلی و جوابگوی سوالات پیوسته اهل دنیای موجود طراحی اساسا مورد استفاده قرار گیرد.

            </span>
        </div>
        <div className={Styled.imgContainer} data-aos="fade-left">
            <img src={image} alt="" />
        </div>
    </div>
  )
}

export default TwoSec