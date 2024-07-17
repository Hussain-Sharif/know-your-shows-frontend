import styled from "styled-components";
import { FaSearch,FaFilter  } from "react-icons/fa";
import { FaFilterCircleXmark } from "react-icons/fa6";
import { GiCancel } from "react-icons/gi";
import { ReuseDiv } from "../Login/styledComponents";

export const InputElement=styled.input`
    border:#fff solid 1px;
    background:transparent;
    width:100%;
    &::placeholder{
        color:#fff;
    }
    outline:none;
    border:none;
    padding:10px;
    font-size:22px;
    color:#000;
`

export const SearchIcon=styled(FaSearch)`
    color:#009b37;
    font-size:30px;
`
export const CancelIcon=styled(GiCancel)`
    color:#382933;
    font-size:30px;
`
export const FilterIcon=styled(FaFilter)`
    color:#009b37;
    font-size:30px;
`
export const ClearFilterIcon=styled(FaFilterCircleXmark )`
    color:#382933;
    font-size:30px;
`

export const SearchButton=styled.button`
    outline:none;
    margin-left:10px;
    padding-left:10px;
    cursor:pointer;
    text-align:center;
    background:transparent;
    border:none;
    border-left:${props=>props.bLeft};
`

export const TagsDiv=styled(ReuseDiv)`
    width:100%;
    display:flex;
    flex-direction:row;
    justify-content:flex-start;
    flex-wrap:wrap;
    align-items:center;
    broder-left-bottom-radius:14px;
    broder-right-bottom-radius:14px;
    margin-top:5px;
    margin-bottom:5px;
    padding:3px;
`

export const Tag=styled.p`
    border:#fff solid 1px;
    background-color:#009b37;
    border-radius:16px;
    padding:6px;
    color:#fff;
    font-size:16px;
    margin-right:5px;
    margin-bottom:5px;
`

export const FilterDiv=styled(ReuseDiv)`
    list-style-type:none;
    display:flex;
    flex-direction:row;
    justify-content:flex-start;
    align-items:flex-start;
    @media screen and (max-width:768px){
        display:${props=>props.filterDisplay?"flex":"none"};
        flex-direction:column;
    }
`