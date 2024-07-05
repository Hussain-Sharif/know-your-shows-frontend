import EachCard from "../EachCard"
import { ReuseDiv } from "../Login/styledComponents"
import {AllCardsDiv} from './styledComponents'


const AllCards =(props)=>{

    const {fetchedData}=props
    return (
        <ReuseDiv width="99%" display="flex" fD="column" jC="center" aI="center">
            <AllCardsDiv as="ul">
                {
                    fetchedData.map(eachItem=>(<EachCard key={eachItem.id} eachItem={eachItem}/>))
                }
            </AllCardsDiv>
        </ReuseDiv>
    )
}


export default AllCards