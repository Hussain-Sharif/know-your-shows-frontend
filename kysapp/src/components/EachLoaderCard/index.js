import Skeleton from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'
import { ReuseDiv } from '../Login/styledComponents'
import LoaderCard from './styledComponents'

const EachLoaderCard=()=>(
    <LoaderCard>
        <ReuseDiv mb="5px" display="flex" width="100%" fD="row" jC="space-between" aI="center">
            <Skeleton width={60} height={20} baseColor="#382933" highlightColor="#A4B494"/>
            <Skeleton width={60} height={20} baseColor="#382933" highlightColor="#A4B494"/>
        </ReuseDiv>
        <Skeleton width={250} height={100} baseColor="#382933" highlightColor="#A4B494"/>
        <ReuseDiv mt="5px" mb="5px" display="flex" width="100%" fD="column" jC="center" aI="flex-start">
            <Skeleton width={150} baseColor="#382933" highlightColor="#A4B494"/>
            <Skeleton width={110} baseColor="#382933" highlightColor="#A4B494"/>
        </ReuseDiv>
        <ReuseDiv mb="5px" display="flex" width="100%" fD="row" jC="space-between" aI="center">
            <Skeleton width={60} height={20} baseColor="#382933" highlightColor="#A4B494"/>
            <Skeleton width={60} height={20} baseColor="#382933" highlightColor="#A4B494"/>
        </ReuseDiv>
    </LoaderCard>
)

export default EachLoaderCard