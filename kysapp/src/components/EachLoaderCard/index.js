import Skeleton from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'
import { ReuseDiv } from '../Login/styledComponents'
import LoaderCard from './styledComponents'

const EachLoaderCard=()=>(
    <LoaderCard>
        <ReuseDiv display="flex" width="100%" fD="row" jC="space-between" aI="center">
            <Skeleton width={10} baseColor="#382933" highlightColor="#A4B494"/>
            <Skeleton width={10} baseColor="#382933" highlightColor="#A4B494"/>
        </ReuseDiv>
        <Skeleton width={100} height={70} baseColor="#382933" highlightColor="#A4B494"/>
        <ReuseDiv display="flex" width="100%" fD="column" jC="center" aI="flex-start">
            <Skeleton width={100} baseColor="#382933" highlightColor="#A4B494"/>
            <Skeleton width={100} baseColor="#382933" highlightColor="#A4B494"/>
        </ReuseDiv>
        <ReuseDiv display="flex" width="100%" fD="row" jC="space-between" aI="center">
            <Skeleton width={10} baseColor="#382933" highlightColor="#A4B494"/>
            <Skeleton width={10} baseColor="#382933" highlightColor="#A4B494"/>
        </ReuseDiv>
    </LoaderCard>
)

export default EachLoaderCard