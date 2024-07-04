import styled from "styled-components";
import { ReuseDiv } from "../Login/styledComponents";

export const EachTopItem=styled(ReuseDiv)`
    padding:5px;
    // border:blue solid 1px;
    overflow:hidden;
    height:100%;
    min-width:30px;
    max-width:450px;
    // @media screen and (max-width:768px){
    //     width:380px;
    //     height:100%;
    //     // overflow:visible;
    //     input:checked + & {
    //         width: 380px;
    //     }
    // }
`
export const HiddenRadioInput = styled.input`
    position: absolute;
    opacity: 0;
    pointer-events: none;
`;

export const Card = styled.label`
height: 100%;
width: 80px;
border-radius: 0.75rem;
background-size: cover;
cursor: pointer;
overflow: hidden;
border-radius: 2rem;
margin: 0 10px;
display: flex;
align-items: flex-end;
transition: 0.6s cubic-bezier(0.28, -0.03, 0, 0.99);
// box-shadow: 0px 10px 30px -5px rgba(0, 0, 0, 0.8);

background-image:url("https://i.ytimg.com/vi/9H4ZA2mr7aA/maxresdefault.jpg");
background-size:cover;

input:checked + & {
    width: 380px;
}

input:checked + & .description {
    opacity: 1 !important;
    transform: translateY(0) !important;
}
`;

export const Row = styled.div`
color: white;
display: flex;
flex-wrap: nowrap;
@media screen and (max-width:768px){
    flex-direction:column;
    height:100%;
    // border:black solid 2px;
    align-items:flex-start;
    justify-content:flex-end;
}
`;

export const Icon = styled.div`
// background: #223;
background-image:url("https://res.cloudinary.com/aymar/image/upload/v1719853798/channel_logo_aqolvj.png");
background-size:cover;
color: white;
border-radius: 50%;
width: 50px;
display: flex;
justify-content: center;
align-items: center;
margin: 15px;
@media screen and (max-width:768px){
    height:50px;
    order:5;

}
`;

export const Description = styled.div`
display: flex;
    justify-content: center;
    flex-direction: column;
    overflow: hidden;
    height: 80px;
    width: 50%;
    opacity: 0;
    transform: translateY(30px);
    transition-delay: 0.3s;
    transition: all 0.3s ease;

    p {
        color: #fff;
        padding-top: 5px;
    }

    h4 {
        color:#fff;
        text-transform: uppercase;
    }
    @media screen and (max-width:768px){
        display:flex;
        flex-direction:row; 
        justify-content:flex-start;
        align-items:center;
        // border:white solid 2px;
        height:90%;
        width:50%;
        padding:0;
        p {
            color: #000;
            padding-top: 5px;
            transform: rotate(-90deg);
            display:none;
        }
        h4 {
        margin:0;
        // font-size:11px;
        width:100%;
            text-transform: uppercase;
            transform: rotate(-90deg);
        }
    }
`;
