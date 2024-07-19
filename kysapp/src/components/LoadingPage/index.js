import { LogoImg, ReuseDiv } from "../Login/styledComponents"
import 'ldrs/ring'
import { zoomies } from 'ldrs'

zoomies.register()

// Default values shown

const LoadingPage=()=>(
    <ReuseDiv bg="#382933" height="100vh" width="100vw" display="flex" fD="column" jC="center" aI="center">
        <LogoImg src="https://res.cloudinary.com/aymar/image/upload/v1719410011/awcu2f0rbtqg07ykehnm.png" alt="Know Your Shows Logo"/>
        <l-zoomies
            size="180"
            stroke="5"
            bg-opacity="0.1"
            speed="1.4" 
            color="#009b37" 
            ></l-zoomies>
    </ReuseDiv>
)

export default LoadingPage