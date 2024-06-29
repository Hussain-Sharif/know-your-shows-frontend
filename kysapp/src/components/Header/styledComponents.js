import styled from "styled-components";
import {AiFillHome,AiOutlineLogout } from 'react-icons/ai'
import {GiSelfLove,GiRingingBell} from 'react-icons/gi'
import {ReuseDiv} from '../Login/styledComponents'
import {Link} from 'react-router-dom'

export const NavDiv=styled(ReuseDiv)`
    position: ${()=>(window.scrollY>100?"sticky":"static")};
    top: 0;
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
    }
`

export const LogoutBtn=styled.button`
    background-color:#fff;
    border:#009b37 solid 3px;
    color:#009b37;
    border-radius:14px;
    font-size:20px;
    cursor:pointer;
    outline:none;
    height:40px;
    padding:5px;
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
export const LikesIcon=styled(GiSelfLove)`
    color:${props=>(props.isClicked?"#009b37":"#fff")};
    font-size:30px;
`
export const RemaindersIcon=styled(GiRingingBell)`
    color:${props=>(props.isClicked?"#009b37":"#fff")};
    font-size:30px;
`
export const LogoutIcon=styled(AiOutlineLogout)`
    color:#009b37;
    font-size:30px;
`