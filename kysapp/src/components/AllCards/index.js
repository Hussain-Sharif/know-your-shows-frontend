import EachCard from "../EachCard"
import { ReuseDiv } from "../Login/styledComponents"
// import {AllCardsDiv} from './styledComponents'
import {AllCardsDiv,ApiFailureHead,ApiFailureImg,ApiFailurePara,ApiFailureView,ApiRetryButton} from './styledComponents'
import EachLoaderCard from '../EachLoaderCard'

const apiStatusContainer= {
    success: 'SUCCESS',
    failure: 'FAILURE',
    inProgress: 'LOADER',
    initial: 'INITIAL',
  }


const AllCards =(props)=>{

    const {fetchedData,cancelOnClick}=props

    const {searchOnClick}=props
    console.log(Array(fetchedData.length).fill(0))
    const getLoader=()=>(
        <AllCardsDiv as="ul">
            {
                (Array(fetchedData.length).fill(0)).map((_,i)=>(
                    <EachLoaderCard key={i}/>
                ))
            }
        </AllCardsDiv>
    )

    const getSuccess=()=>(
        <>
        {/* <AllCardsDiv as="ul">
            <h1>Hello Bitch</h1>
        </AllCardsDiv> */}
        {fetchedData.length!==0? <AllCardsDiv as="ul">
             {
                 fetchedData.map(eachItem=>(<EachCard key={eachItem.id} eachItem={eachItem}/>))
             }
         </AllCardsDiv>: getFailure("Sorry, Nothing to Show","Knidly, Search for another SHOW","true")}
        </>)

    const getFailure=(head="Oops! Something Went Wrong",para="We are having some trouble to complete your request.",isEmptyData="false")=>(
        <ApiFailureView>
      <ApiFailureImg
        src='https://assets.ccbp.in/frontend/react-js/nxt-watch-failure-view-light-theme-img.png'   
        alt="failure view"
      />
      <ApiFailureHead >
        {head}
      </ApiFailureHead>
      <ApiFailurePara >
        {para} <br /> Please try
        again.
      </ApiFailurePara>
      <ApiRetryButton type="button" onClick={isEmptyData==="false"?retryButtonClicked:cancelOnClick}>
        {isEmptyData==="false"?"Retry":"Clear Search"}
      </ApiRetryButton>
    </ApiFailureView>
    )

    const retryButtonClicked=()=>{
        searchOnClick()
    }

    const getApiAllCardsResults=()=>{
      const {apiStatus}=props
      switch (apiStatus) {
        case apiStatusContainer.inProgress:
          return getLoader();
        case apiStatusContainer.failure:
          return getFailure();
        case apiStatusContainer.success:
          return getSuccess();
        default:
          return ;
      }
    }

    return (
        <ReuseDiv width="99%" display="flex" fD="column" jC="center" aI="center">
            {getApiAllCardsResults()}
        </ReuseDiv>
    )
}


export default AllCards