import React from 'react'
import ImageComparisonSlider from "./ImageComparisonSlider";
import Styled from "./ComparSlider.module.css"
import BeforePic from "../../assets/Image/glassbefore.jpeg"
import AfterPic from "../../assets/Image/glassAfter.jpeg"
import BeforeImg from "../../assets/Image/Before1.jpeg"
import AfterImg from "../../assets/Image/After1.jpeg"


const ComparSlider = () => {
    return (
        <div className={Styled.comparSlider}>
            <div className={Styled.slider}>
                <ImageComparisonSlider
                    beforeSrc={BeforePic}
                    afterSrc={AfterPic}
                    width={600}
                    height={400}
                    lineColor="#ffffff"
                    lineWidth={4}
                    className={Styled.comparison}
                />

            </div>
            <div className={Styled.sliderSec}>
                <ImageComparisonSlider
                    beforeSrc={BeforeImg}
                    afterSrc={AfterImg}
                    width={600}
                    height={400}
                    lineColor="#ffffff"
                    lineWidth={4}
                    className={Styled.comparison}
                />

            </div>
        </div>
    );
}

export default ComparSlider