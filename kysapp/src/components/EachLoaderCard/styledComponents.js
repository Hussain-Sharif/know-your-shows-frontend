import styled from "styled-components";
import { ReuseDiv } from "../Login/styledComponents";

const LoaderCard=styled(ReuseDiv)`
    min-width:290px;
    max-width:320px;
    border-radius:14px;
    padding:5px;
    display:flex;
    flex-direction:column;
    justify-content:center;
    align-items:center;
    align-self:center;
    border:#009b37 solid 2px;
    margin:5px;
    @media screen and (max-width:768px){
        min-width:250px;
        max-width:290px;
    }
`
export default LoaderCard