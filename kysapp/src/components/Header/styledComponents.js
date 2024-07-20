import styled from "styled-components";
import {AiFillHome } from 'react-icons/ai'
import { RiLogoutCircleRLine } from "react-icons/ri";
import {GiRingingBell} from 'react-icons/gi'
import { FaHeart } from "react-icons/fa";
import {ReuseDiv} from '../Login/styledComponents'
import {Link} from 'react-router-dom'

export const NavDiv=styled(ReuseDiv)`
    position: sticky;
    top: 0;
    z-index:1000;
    // overflow:hidden;
    width: 100%
`

export const NavLink=styled(Link)`
    text-decoration:none;
    
`

export const KysLogo=styled.img`
    max-width:88px;
    border:#00 solid 1px;
    margin-left:20px;
    @media screen and (max-width:768px){
        max-width:70px;
        margin-left:5px;
    }
`

export const LogoutBtn=styled.button`
    background-color:#fff;
    border:#009b37 solid 3px;
    color:#009b37;
    border-radius:14px;
    font-size:60px;
    cursor:pointer;
    outline:none;
    // height:40px;
    // padding:10px;
    display:flex;
    flex-direction:column;
    justify-content:center;
    align-items:center;
    &:hover{
        color:#fff;
        background-color:#009b37;
        border:0px;
    }
        
    @media screen and(max-width:768px){
        background-color:transparent;
        border:0px;
        height:auto;
    }
`

export const HomeIcon=styled(AiFillHome)`
    color:${props=>(props.isClicked?"#009b37":"#fff")};
    font-size:30px;
`
export const LikesIcon=styled(FaHeart)`
    color:${props=>(props.isClicked?"#009b37":"#fff")};
    font-size:30px;
`
export const RemaindersIcon=styled(GiRingingBell)`
    color:${props=>(props.isClicked?"#009b37":"#fff")};
    font-size:30px;
`
export const LogoutIcon=styled(RiLogoutCircleRLine)`
    color:#009b37;
    font-size:30px;
    margin:10px;
    &:hover{
        color:#fff;
        background-color:#009b37;
        border:0px;
    }
`