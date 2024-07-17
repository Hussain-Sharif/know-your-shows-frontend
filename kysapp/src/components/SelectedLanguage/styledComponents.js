import styled from "styled-components";
import {SwiperSlide } from 'swiper/react';

import { ReuseDiv } from "../Login/styledComponents";

// const SelectedLanguageDiv=styled(ReuseDiv)`
//      list-style-type: none;
//     height: 300px;
//     display: flex;
//     flex-wrap: nowrap;
//     // border:red solid 4px;
//     justify-content: center;
//     width: 100%;
//     overflow-x: scroll;
//     scrollbar-width: none; 
//     -ms-overflow-style: none; 
    
//     &::-webkit-scrollbar {
//         display: none; 
//     }

//     // @media screen and (max-width: 768px) {
//     //     width: 90%;
//     //     // overflow-x: hidden;
//     // }
// `

// export default SelectedLanguageDiv

export const MainSliderDiv=styled(ReuseDiv)`
    max-height:70%;
    .swiper {
    width: 100%;
    padding-top: 50px;
    padding-bottom: 50px;
  }
  

  
  .swiper-slide img {
    display: block;
    width: 100%;
  }
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
