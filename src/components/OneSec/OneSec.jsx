import React from 'react'
import Banner from "../../assets/Image/mainbanner.webp"
import Styled from "../OneSec/OneSec.module.css"

const OneSec = () => {
    return(
        <div className={Styled.mainBanner}>
            <img src={Banner} alt="autoglass" />
            <div className={Styled.off}>
                <span>
                    SAVE 10% OFF
                </span>
            </div>
        </div>
    )
}


export default OneSec; 