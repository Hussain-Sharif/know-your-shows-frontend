
import LoaderCard from '../EachLoaderCard/styledComponents'
import { ReuseDiv, ReuseText } from '../Login/styledComponents'
import {CardImage,CardButtons,LikeIcon,RemainderIcon} from './styledComponents'
import {Tag} from '../SearchFilter/styledComponents'

const EachCard=(props)=>{
    const {eachItem}=props
    const {channel,show,endOfShow,startOfShow,genre,language}=eachItem
    console.log({endOfShow,startOfShow})
    const start=new Date(startOfShow)
    const startTime=`${start.getHours()}:${start.getMinutes()}`
    const end=new Date(endOfShow)
    const endTime=`${end.getHours()}:${end.getMinutes()}`
    return (
        <LoaderCard>
            <ReuseDiv mt="5px" mb="5px" display="flex" width="95%" fD="row" jC="space-between" aI="center">
                <ReuseText color="#382933" fW="600">{startTime}</ReuseText>
                <ReuseText color="#382933" fW="600">{endTime}</ReuseText>
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
                <CardButtons><LikeIcon/></CardButtons>
                <CardButtons><RemainderIcon/></CardButtons>
            </ReuseDiv>
        </LoaderCard>
    )
}

export default EachCard