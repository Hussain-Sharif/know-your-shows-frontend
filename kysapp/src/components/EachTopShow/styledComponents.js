import styled from "styled-components";
import { ReuseDiv } from "../Login/styledComponents";

export const EachTopItem=styled(ReuseDiv)`
    padding:15px;
    // border:blue solid 1px;
    width:100%;
    height:100%;
    background-image:url("https://i.ytimg.com/vi/9H4ZA2mr7aA/maxresdefault.jpg");
    background-size:cover;
    display:flex;
    flex-direction:column;
    justify-content:flex-end;
    align-items:flex-start;
    @media screen and (max-width:768px){
        align-items:center;
        height:400px;
        width:100%;
    }
`




export const Icon = styled.img`
border-radius: 50%;
max-height:60px;
max-width:60px;
margin-right:15px;
`;

export const CardInfo=styled(ReuseDiv)`
    border-radius: 50px;
    background: #000;
    opacity:0.8;
    @media screen and (max-width:768px){
        max-width:300px !important;
        width:70% !important;
        margin-bottom:40px;
    }
`