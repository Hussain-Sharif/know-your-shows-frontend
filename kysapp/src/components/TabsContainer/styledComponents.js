import styled from "styled-components";
import { ReuseDiv } from "../Login/styledComponents";

export const TabsDiv=styled(ReuseDiv)`
    border-bottom:#382933 solid 5px;
    list-style-type:none;
    margin-top:5px;
    border-radius:14px;
`
export const TabButton=styled.button`
    cursor:pointer;
    outline:none;
    font-weight:bolder;
    color:${props=>(props.isClicked?"#fff":"#519872")};
    background-color:${props=>(props.isClicked?"#009b37":"transparent")};
    border:red solid 2px;
    border-color:${props=>(props.isClicked?"#fff":"transparent")};
    padding:10px;
    font-size:20px;
    border-radius:16px;
`

export const TabItem=styled(ReuseDiv)`
    padding:10px;
`