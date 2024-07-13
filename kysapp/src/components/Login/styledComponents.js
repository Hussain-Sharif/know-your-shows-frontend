import styled from 'styled-components'

export const LoginBg = styled.div`
  background-color:black;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100vh;
  opacity: 1;
  @media screen and (max-width:768px){
    flex-direction: column;
    height:auto;
  }
`

export const LoginCard = styled(LoginBg)`
display:flex;
flex-direction:row;
justify-content:flex-start;
align-items:flex-start;
  height: auto;
  width: 50%;
  margin: 20px;
  background-color: #1A1B1C;
  opacity: 0.8;
  padding: 10px;
  box-shadow:  '10px 10px 20px 20px #bfbfbf';
  border-radius: 10px;
  @media screen and (max-width:768px){
    flex-direction: column;
    align-items:center;
    order:1;
    width:90%;
    padding-top:10px;
    padding-bottom:20px;
  }
`
export const LogoImg = styled.img`
  max-width: 180px;
  margin-bottom: 20px;
  @media screen and (max-width:767px){
    max-width:100px;
    align-self:center;
  }
  @media screen and (min-width:768px){
    max-width:150px;
  }
`

export const LoginImage=styled.img`
  max-width:600px;
  widht:50%;
  min-width:310px;
  margin-left:20px;
  margin-bottom:20px;
  @media screen and (max-width:425px){
    order:0;
    max-width:250px;
    margin:0;
    // border:red solid 1px ;
  }
  @media screen and (min-width:768px){
    order:0;
    max-width:525px;
    margin:0;
    // border:red solid 1px ;
  }
`
export const ReuseDiv = styled.div`
  display: ${props=>props.display};
  border-radius:${props=>props.bRadius};
  flex-direction:${props=>props.fD};
  justify-content: ${props=>props.jC};
  align-items: ${props=>props.aI};
  align-self:${props=>props.aS};
  width: ${props=>props.width};
  background-color: ${props=>props.bg};
  margin-bottom: ${props=>props.mb};
  margin-top: ${props=>props.mt};
  margin-left: ${props=>props.ml};
  margin-right: ${props=>props.mr};
  padding-bottom: ${props=>props.pb};
  padding-top: ${props=>props.pt};
  padding-left: ${props=>props.pl};
  padding-right: ${props=>props.pr};
  padding: ${props=>props.p};
  margin: ${props=>props.m};
  height:${props=>props.height};
    // border: #000 solid 1px;
    border:${props=>props.border};
    border-bottom:${props=>props.borderBottom};
    border-top:${props=>props.borderTop};
    border-left:${props=>props.borderLeft};
    border-right:${props=>props.borderRight};
    
  @media screen and (max-width:768px){
  display: ${props=>props.sDisplay};
    flex-direction:${props=>props.sfD};
  justify-content: ${props=>props.sjC};
  align-items: ${props=>props.saI};
  align-self:${props=>props.saS};
  width: ${props=>props.swidth};
  height: ${props=>props.sheight};
  margin-bottom: ${props=>props.smb};
  margin-top: ${props=>props.smt};
  margin-left: ${props=>props.sml};
  margin-right: ${props=>props.smr};
  padding-bottom: ${props=>props.spb};
  padding-top: ${props=>props.spt};
  padding-left: ${props=>props.spl};
  padding-right: ${props=>props.spr};
  overflow:${props=>props.sOf};
  }
`
export const InputDiv=styled.div`
  margin: 10px;
  position: relative;
  // border:red solid 1px;
  width:70%;
  @media screen and (max-width:768px){
    width:90%;
    margin:10px;
    display:flex;
    flex-direction:column;
    justify-content:center;
    align-items:center;
  }
`

export const LoginLabel = styled.label`
  color: #009b37;
  font-weight: bold;
  position: absolute;
  top: 0;
  left: 0;
  transform: translateY(0.625rem);
  background-color: transparent;
  padding-inline: 0.25rem;
  border: 2px solid transparent;
  pointer-events: none;
  transition: transform 250ms, background-color 250ms, border-color 250ms;

  ${InputDiv}:focus-within &,
  ${InputDiv}:not(:has(:placeholder-shown)) & {
    transform: translateY(-1rem);
    border-color: #009b37;
    border-radius: 10px;
    background-color:#1A1B1C;
    padding: 5px;
  color:#fff;
  margin-bottom: 10px;
`

export const LoginInput = styled.input`
  color: #f1f5f9;
  // border: 1px solid #fff;
  border-radius: 10px;
  background-color: transparent;
  outline: none;
  padding: 10px;
  width: 100%;
  font-size: 18px;
  width: ${props => props.isText};
  border-color:  '#fff';
  border-width: 1px;
  border-style: solid;
  border-radius: 10px;
  font-size: 18px;
  margin-top: 5px;
  padding: 10px;
  outline-color: '#000';

  ::placeholder {
    color: #94a3b8;
  }

  @media screen and (max-width:768px){
    // width:55%;
  }
`

export const LoginShowPassDiv = styled(ReuseDiv)`
  display:flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  width:100%;
  // border:red solid 1px;
  `

export const ShowLabel=styled.label`
  color:#fff;
  margin-left:10px ;
  cursor:pointer;
`

export const LoginButton = styled.button`
  width: 50%;
  border: none;
  outline: none;
  cursor: pointer;
  background-color: #009b37;
  color: #fff;
  padding: 10px;
  align-self:center;
  border-radius: 10px;
  :hover {
    // transition: 0.2s;
    background-color: #fff;
    color:#009b37;
  }
    @media screen and (max-width:768px){
      margin-top:12px;
    }
`

export const ErrorMsg = styled.p`
  color: red;
`

export const ReuseText=styled.p`
  font-size:${props=>props.fS};
  color:${props=>props.color};
  font-weight:${props=>props.fW};
  text-decoration:${props=>props.tD};
  text-align:${props=>props.tA};
  align-self:${props=>props.aS};
  margin:0;
  cursor:pointer;
  margin-bottom: ${props=>props.mb};
  margin-top: ${props=>props.mt};
  margin-left: ${props=>props.ml};
  margin-right: ${props=>props.mr};
  padding-bottom: ${props=>props.pb};
  padding-top: ${props=>props.pt};
  padding-left: ${props=>props.pl};
  padding-right: ${props=>props.pr};
  background-color:${props=>props.bg};
  border-radius:${props=>props.bR};
  &:hover{
    color:${props=>props.hColor};
  }
  @media screen and (max-width:768px){
  margin-bottom: ${props=>props.smb};
  margin-top: ${props=>props.smt};
  margin-left: ${props=>props.sml};
  margin-right: ${props=>props.smr};
  padding-bottom: ${props=>props.spb};
  padding-top: ${props=>props.spt};
  padding-left: ${props=>props.spl};
  padding-right: ${props=>props.spr};
  }
`