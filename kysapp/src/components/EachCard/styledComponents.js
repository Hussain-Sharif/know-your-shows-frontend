import styled from "styled-components";
import { GiRingingBell} from "react-icons/gi";
import { FaHeart } from "react-icons/fa";


export const CardImage=styled.img`
    width:95%;
    align-self:center;
`

export const  CardButtons=styled.button`
    background:transparent;
    outline:none;
    border:none;
    cursor:pointer;
`
export const LikeIcon=styled(FaHeart)`
    font-size:30px;
    color:${props=>props.isClicked?"#009b37":"#382933"};
`
export const RemainderIcon=styled(GiRingingBell)`
    font-size:30px;
    color:${props=>props.isClicked?"#009b37":"#382933"};
`