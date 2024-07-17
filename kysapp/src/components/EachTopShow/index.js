
import { ReuseDiv, ReuseText } from "../Login/styledComponents"
import { EachTopItem,Icon,CardInfo } from "./styledComponents"

const EachTopShow=(props)=>{
    const {eachItem}=props
    // const {id}=eachItem
    const {show,channel}=eachItem

    return (
        <EachTopItem>
            <CardInfo display="flex" fD="row" width="100%" jC="flex-start" aI="center">
                <Icon src="https://res.cloudinary.com/aymar/image/upload/v1719853798/channel_logo_aqolvj.png" alt="channels"/>
                <ReuseDiv display="flex" fD="column" jC="flex-start" aI="flex-start">
                    <ReuseText color="#fff" fW="bolder">
                        {show}
                    </ReuseText>
                    <ReuseText color="#fff">
                        {channel}
                    </ReuseText>
                </ReuseDiv>
            </CardInfo>
        </EachTopItem>
    )
}

export default EachTopShow