import { Component } from 'react'
import 'ldrs/ring'

import Cookies from 'js-cookie'
import {withRouter} from 'react-router-dom'

import {ReuseDiv,ReuseText} from '../Login/styledComponents'
import {NavDiv,NavLink,LogoutBtn,KysLogo,HomeIcon,LikesIcon,RemaindersIcon, LogoutIcon} from './styledComponents'

import { hourglass } from 'ldrs'

hourglass.register()


const apiStatusConstants={
    initial:"INITIAL",
    isProgress:"LOADER",
    success:"SUCCESS",
    failure:"FAILURE"
  }

  const listOfRoutes = [
    {id: 'home', title: 'Home', path: '/',value:0},
    {id: 'likes', title: 'Likes', path: '/likes',value:0},
    {id: 'remainders', title: 'Remainders', path: '/remainders',value:0},
  ]

class Header extends Component{
    constructor(props){
        super(props)
        this.state={
                kysLogo:'',
            apiStatus:apiStatusConstants.initial,
        }
    }

    componentDidMount(){
        this.getImageApi()
    }

    getImageApi=async()=>{
        this.setState({apiStatus:apiStatusConstants.isProgress})
        const apiUrl="https://know-your-shows-production.up.railway.app/kyslogo/"
        const options={
        method:"GET"
        }
        const response=await fetch(apiUrl,options)
        if(response.ok===true){
        const data=await response.json()
        //console.log({data})
        const formattedData={
            kysLogo:data.kys_logo,
            loginBg:data.login_bg
        }
        this.setState({kysLogo:formattedData,apiStatus:apiStatusConstants.success})
        }else{
        this.setState({apiStatus:apiStatusConstants.failure})
        }
    }

    onLogout = () => {
    const {history} = this.props
    Cookies.remove('jwt_token')
    Cookies.remove("user_id")
    history.replace('/login')
  }

  getLoader=()=>(
    <l-hourglass
    size="40"
    bg-opacity="0.1"
    speed="1.75" 
    color="black" 
  ></l-hourglass>
    )

    getFailureLogoApi=()=>{
    <ReuseText>Logo Image</ReuseText>
    }

    getSuccessLogoApi=()=>{
    const {kysLogo}=this.state
    //console.log({kysLogo})
    return (
        <KysLogo
        src={kysLogo.kysLogo} alt="Logo"/>
    )
    }
    renderLogoApi=()=>{
    const {apiStatus}=this.state
    switch (apiStatus) {
        case apiStatusConstants.isProgress:
        return this.getLoader()    
        case apiStatusConstants.failure:
        return this.getFailureLogoApi()    
        case apiStatusConstants.success:
        return this.getSuccessLogoApi()    
        default:
        break;
    }
    }

  render(){
    const {location}=this.props    
    const isClicked=listOfRoutes.map(eachRoute =>{
            if(eachRoute.path === location.pathname){
                return {...eachRoute,value:1}
            }
            return {...eachRoute,value:0}
        })
        
            // console.log("In Header ",{isClicked}, this.props,listOfRoutes.map(eachRoute =>{
            //     if(eachRoute.path === location.pathname){
            //         return {...eachRoute,value:1}
            //     }
            //     return {...eachRoute,value:0}
            // }))
    return (
        <NavDiv aS="center" display="flex" bg="#382933" fD="row" jC="space-between" aI="center" height="80px" width="100%" >
            {this.renderLogoApi()}
            <ReuseDiv display="flex" width="30%" jC="space-between" sDisplay="none" >
                <NavLink to="/"> 
                    <ReuseText fS="20px" fW="bolder" tD="none" hColor="#009b37" color={`${(isClicked[0].value)?"#009b37":"grey"}`} >Home</ReuseText>
                </NavLink>
                <NavLink to="/likes">
                    <ReuseText fS="20px" fW="bolder" tD="none" hColor="#009b37" color={`${(isClicked[1].value)?"#009b37":"grey"}`} >Likes</ReuseText>
                </NavLink>
                <NavLink  to="/remainders">
                <ReuseText tD="none" fS="20px" fW="bolder" hColor="#009b37" color={`${(isClicked[2].value)?"#009b37":"grey"}`}>Remainders</ReuseText>
                </NavLink>
            </ReuseDiv>
            <ReuseDiv display="none" sDisplay="flex" jC="space-between" aI="center" swidth="40%">
                <NavLink isClicked={isClicked[0].value} to="/"> 
                    <HomeIcon isClicked={isClicked[0].value}/>
                </NavLink>
                <NavLink  to="/likes">
                    <LikesIcon isClicked={isClicked[1].value}/>
                </NavLink>
                <NavLink to="/remainders">
                    <RemaindersIcon isClicked={isClicked[2].value}/>
                </NavLink>
            </ReuseDiv>
            {/* <ReuseDiv display="flex" sDisplay="none" mr="20px">
                <LogoutBtn onClick={this.onLogout} type="button" >
                    Logout
                </LogoutBtn>
            </ReuseDiv> */}
            <ReuseDiv display="flex" sDisplay="flex" mr="20px" smr="5px" bg="transparent">
                <LogoutBtn onClick={this.onLogout} type="button" >
                    <LogoutIcon />
                </LogoutBtn>
            </ReuseDiv>
        </NavDiv>
      )
  }
}

export default withRouter(Header)