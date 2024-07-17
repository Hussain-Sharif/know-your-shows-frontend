import styled from "styled-components";
import { ReuseDiv } from "../Login/styledComponents";

export const AllCardsDiv=styled(ReuseDiv)`
    lsit-style-type:none;
    padding-left:0;
    display:flex;
    flex-direction:row;
    justify-content:center;
    align-items:flex-start;
    // border:red solid 2px;
    flex-wrap:wrap;
    width:99%;
    @media screen and (max-width:768px){
        flex-direction:row;
        justify-content:center;
    align-items:flex-start;
    }
`

export const ApiFailureView = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: transparent;
`

export const ApiFailureImg = styled.img`
  max-width: 500px;
  @media screen and (max-width:768px){
    max-width:250px;
  }
`

export const ApiFailureHead = styled.h1`
  color: #1e293b;
  font-size: 22px;
`

export const ApiFailurePara = styled.p`
  text-align: center;
  font-size: 18px;
  color: #475569;
  margin-top:10px;
`

export const ApiRetryButton = styled.button`
  color: #fff;
  background: #4f46e5;
  padding: 10px;
  border: none;
  outline: none;
  cursor: pointer;
  border-radius: 8px;
  font-size: 20px;
  margin-top:10px;
  margin-bottom:10px;
`