import Cookies from 'js-cookie'
import LoaderCard from '../EachLoaderCard/styledComponents'
import { ReuseDiv, ReuseText } from '../Login/styledComponents'
import {CardImage,CardButtons,LikeIcon,RemainderIcon} from './styledComponents'
import {Tag} from '../SearchFilter/styledComponents'

const EachCard=(props)=>{
    const {eachItem,userClickedLike,userClickedRemainder}=props
    const {id,channel,show,endOfShow,startOfShow,genre,language,isLiked,isRemainded}=eachItem
    const userId=Cookies.get("user_id")
    
    const onClickLike=()=>{
        //console.log("Is Liked in EACHCARD")
        userClickedLike(id,userId)
    }

    const onClickRemainder=()=>{
        //console.log("Is Remainded in EACHCARD")
        userClickedRemainder(id,userId)
    }

    //console.log("each Card",{id,userId,endOfShow,startOfShow,isLiked,isRemainded})
    const start=new Date(startOfShow)
    const startTime=`${start.getHours()}:${start.getMinutes()}`
    const end=new Date(endOfShow)
    const endTime=`${end.getHours()}:${end.getMinutes()}`
    return (
        <LoaderCard>
            <ReuseDiv mt="5px" mb="5px" display="flex" width="95%" fD="row" jC="space-between" aI="center">
                <ReuseText color="#009b37" fW="600">{startTime}</ReuseText>
                <ReuseText color="#009b37" fW="600">{endTime}</ReuseText>
            </ReuseDiv>
            <CardImage src="https://i.ytimg.com/vi/9H4ZA2mr7aA/maxresdefault.jpg" alt="Show Image" />
            <ReuseDiv mt="5px" mb="5px" display="flex" width="100%" fD="column" jC="center" aI="flex-start">
                <ReuseText color="#009b37" fW="Bolder">{show}</ReuseText>
                <ReuseText color="#000">{channel}</ReuseText>
            </ReuseDiv>
            <ReuseDiv mt="5px" mb="5px" display="flex" width="100%" fD="row" jC="flex-start" aI="center">
                <Tag>{genre}</Tag>
                <Tag>{language}</Tag>
            </ReuseDiv>
            <ReuseDiv mb="5px" display="flex" width="95%" fD="row" jC="space-between" aI="center">
                <CardButtons type="button" onClick={onClickLike}><LikeIcon isClicked={isLiked===1}/></CardButtons>
                <CardButtons type="button" onClick={onClickRemainder}><RemainderIcon isClicked={isRemainded===1}/></CardButtons>
            </ReuseDiv>
        </LoaderCard>
    )
}

export default EachCard