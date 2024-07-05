import styled from "styled-components";
import { ReuseDiv } from "../Login/styledComponents";

const AllCardsDiv=styled(ReuseDiv)`
    lsit-style-type:none;
    padding-left:0;
    display:flex;
    flex-direction:row;
    justify-content:flex-start;
    align-items:flex-start;
    flex-wrap:wrap;
    width:99%;
    @media screen and (max-width:768px){
        flex-direction:column;
    }
`

export default AllCardsDiv