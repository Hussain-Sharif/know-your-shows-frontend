import styled from "styled-components";
import {SwiperSlide,Swiper } from 'swiper/react';

import { ReuseDiv } from "../Login/styledComponents";


export const MainSliderDiv=styled(ReuseDiv)`
    max-height:70%;
    .swiper {
    width: 100%;
    padding-top: 25px;
    padding-bottom: 50px;
  }
  
  .swiper-button-prev,
.swiper-button-next {
    color: #009b37; 
}

/* Customize Swiper Pagination Bullets */
.swiper-pagination-bullet {
    background-color: #382933;
}
`

export const ActualSwiper=styled(Swiper)`
    background:transparent:
`

export const Slider=styled(SwiperSlide)`
    background-position: center;
    background-size: cover;
    min-width:590px;
    max-width:600px;
    min-height:330px;
    max-height:330px;
    @media screen and (max-width:768){
        width:300px;
        height:400px;
    }
`
