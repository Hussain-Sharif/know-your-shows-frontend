import styled from "styled-components";
import { ReuseDiv } from "../Login/styledComponents";

const SelectedLanguageDiv=styled(ReuseDiv)`
     list-style-type: none;
    height: 300px;
    display: flex;
    flex-wrap: nowrap;
    // border:red solid 4px;
    justify-content: center;
    width: 100%;
    overflow-x: scroll;
    scrollbar-width: none; 
    -ms-overflow-style: none; 
    
    &::-webkit-scrollbar {
        display: none; 
    }

    // @media screen and (max-width: 768px) {
    //     width: 90%;
    //     // overflow-x: hidden;
    // }
`

export default SelectedLanguageDiv