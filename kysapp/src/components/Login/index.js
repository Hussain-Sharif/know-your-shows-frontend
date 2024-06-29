import {Component} from 'react'
import {Redirect} from 'react-router-dom'
import Cookies from 'js-cookie'
import {
  LoginBg,
  LoginCard,
  ReuseDiv,
  InputDiv,
  LoginLabel,
  ShowLabel,
  LoginInput,
  LoginButton,
  LogoImg,
  ErrorMsg,
  LoginShowPassDiv,
  ReuseText,
  LoginImage
} from './styledComponents'

const apiStatusConstants={
  initial:"INITIAL",
  isProgress:"LOADER",
  success:"SUCCESS",
  failure:"FAILURE"
}

class Login extends Component {
  state = {
    username: '',
    password: '',
    errorMsg: null,
    isShownPassword: false,
    apiStatus:apiStatusConstants.initial,
    myData:{}
  }

  onSuccess = data => {
    const {history} = this.props
    Cookies.set('jwt_token', data.jwtToken, {expires: 100})
    history.replace('/')
  }

  onFailure = data => {
    this.setState({errorMsg: `*${data.error_msg}`, username: '', password: ''})
  }

  componentDidMount(){
    this.getLogoApi()
  }

  getLogoApi=async()=>{
    this.setState({apiStatus:apiStatusConstants.isProgress})
    const apiUrl="http://localhost:4000/kyslogo/"
    const options={
      method:"GET"
    }
    const response=await fetch(apiUrl,options)
    if(response.ok===true){
      const data=await response.json()
      console.log({data})
      const formattedData={
        kysLogo:data.kys_logo,
        loginBg:data.login_bg
      }
      this.setState({myData:formattedData,apiStatus:apiStatusConstants.success})
    }else{
      this.setState({apiStatus:apiStatusConstants.failure})
    }
  }



  onSubmitForm = async event => {
    event.preventDefault()
    const {username, password} = this.state
    if(username==="" || password===""){
      alert("Please Enter in the Field")
    }
    const userDetails = {username, password}
    console.log({userDetails})
    const apiUrl = 'http://localhost:4000/login/'
    const options = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(userDetails),
    }
    const response = await fetch(apiUrl, options)
    const data = await response.json()
    if (response.ok === true) {
      this.onSuccess(data)
      console.log('login data', data)
      this.setState({errorMsg:null})
    } else {
      console.log('API fucked UP')
      this.onFailure(data)
    }
  }

  navigateSignup=()=>{
    const {history} =this.props
    history.push("/signup")
  }

  usernameChange = event => {
    this.setState({username: event.target.value})
  }

  passwordChange = event => {
    this.setState({password: event.target.value})
  }

  showPasswordChange = event => {
    this.setState({isShownPassword: event.target.checked})
  }

  getLoader=()=>(
      <p>IS Loading WAIT</p>
  )
  
  getFailureLogoApi=()=>{
    <ErrorMsg>Logo Image</ErrorMsg>
  }

  getSuccessLogoApi=()=>{
    const {myData}=this.state
    return (
      <LogoImg
        src={myData.kysLogo} alt="Logo"/>
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

  render() {
          const {username, password, errorMsg, isShownPassword,myData} = this.state
          console.log({
            username,
            password,
            errorMsg,
            isShownPassword,
            myData
          })
        if (Cookies.get('jwt_token') !== undefined) {
        return <Redirect to="/" />
        }
          
        return (
        <LoginBg >
            <LoginCard
            >
            <ReuseDiv display="flex"  as="form" bg="transparent"
            onSubmit={this.onSubmitForm} fD="column" jC="center" aI="center" width="60%" swidth="100%" saI="center">
              {this.renderLogoApi()}
              <ReuseDiv display="flex"  bg="transparent" fD="row" mb="10px" jC="flex-start" aI="flex-end" saS="flex-start" width="90%">
                <ReuseText tA="left" color="#fff" as="h1" fS="28px">Login</ReuseText>
              </ReuseDiv>
              <InputDiv>
                  <LoginLabel
                  htmlFor="username"
                  >
                  Username/E-mail
                  </LoginLabel>
                  <LoginInput
                  value={username}
                  id="username"
                  placeholder=""
                  istext="100%"
                  
                  type="text"
                  onChange={this.usernameChange}
                  />
              </InputDiv>
              <InputDiv>
                  <LoginLabel
                  htmlFor="password"
                  >
                  Password
                  </LoginLabel>
                  <LoginInput
                  value={password}
                  id="password"
                  placeholder=""
                  istext="100%"
                  type={`${isShownPassword ? 'text' : 'password'}`}
                  onChange={this.passwordChange}
                  />
              </InputDiv>
              <LoginShowPassDiv>
                  <input
                  value={isShownPassword}
                  id="checkbox"
                  istext="auto"
                  type="checkbox"
                  onChange={this.showPasswordChange}
                  />
                  <ShowLabel
                  htmlFor="checkbox"
                  >
                  Show Password
                  </ShowLabel>
              </LoginShowPassDiv>
              <ReuseDiv display="flex"  bg="transparent" fD="row" jC="center" mb="10px" mt="5px" width="100%" aI="center">
                  <LoginButton type="submit">Login</LoginButton>
              </ReuseDiv>
              <ReuseDiv display="flex"  bg="transparent">
                <ErrorMsg>{errorMsg}</ErrorMsg>
            </ReuseDiv>
            </ReuseDiv>
            <ReuseDiv display="flex"  bg="grey" ml="10px" mr="10px" sml="0px"  mb="25px" height="250px" sheight="3px" width="3px" swidth="70%" bRadius="16px" aS="center">
            </ReuseDiv>
            <ReuseDiv display="flex"  bg="transparent" fD="column" jC="flex-start" aI="flex-end" saS="flex-end">
              <ReuseText tA="right" color="#fff" as="h1" fS="22px">Not having an Account?</ReuseText>
              <ReuseText tA="right" color="grey" as="h1" fS="12px">click here to <ReuseText onClick={this.navigateSignup} color="#009b37" as="a" fS="12px" tD="underline">SignUp</ReuseText></ReuseText>
            </ReuseDiv>
            </LoginCard>
            <ReuseDiv display="flex"  bg="transparent" fD="column" jC="center" aI="center" width="50%" swidth="98%" >
              <LoginImage src={myData.loginBg} alt="Login Image" />
            </ReuseDiv>
        </LoginBg>
        )
    
  }
}

export default Login