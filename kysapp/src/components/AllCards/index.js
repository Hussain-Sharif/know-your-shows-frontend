import EachCard from "../EachCard"
import { ReuseDiv } from "../Login/styledComponents"
import {AllCardsDiv} from './styledComponents'
// import {AllCardsDiv,ApiFailureHead,ApiFailureImg,ApiFailurePara,ApiFailureView,ApiRetryButton} from './styledComponents'
// import EachLoaderCard from '../EachLoaderCard'

// const apiStatusContainer= {
//     success: 'SUCCESS',
//     failure: 'FAILURE',
//     inProgress: 'LOADER',
//     initial: 'INITIAL',
//   }


const AllCards =(props)=>{

    const {fetchedData}=props

    // const {searchOnClick}=props
    // console.log(Array(8).fill(0))
    // const getLoader=()=>(
    //     <AllCardsDiv as="ul">
    //         {
    //             (Array(2).fill(0)).map((_,i)=>(
    //                 <EachLoaderCard key={i}/>
    //             ))
    //         }
    //     </AllCardsDiv>
    // )

    const getSuccess=()=>(
        <>
        {/* <AllCardsDiv as="ul">
            <h1>Hello Bitch</h1>
        </AllCardsDiv> */}
        <AllCardsDiv as="ul">
             {
                 fetchedData.map(eachItem=>(<EachCard key={eachItem.id} eachItem={eachItem}/>))
             }
         </AllCardsDiv>
        </>)

    // const getFailure=()=>(
    //     <ApiFailureView>
    //   <ApiFailureImg
    //     src='https://assets.ccbp.in/frontend/react-js/nxt-watch-failure-view-light-theme-img.png'   
    //     alt="failure view"
    //   />
    //   <ApiFailureHead >
    //     Oops! Something Went Wrong
    //   </ApiFailureHead>
    //   <ApiFailurePara >
    //     We are having some trouble to complete your request. <br /> Please try
    //     again.
    //   </ApiFailurePara>
    //   <ApiRetryButton type="button" onClick={retryButtonClicked}>
    //     Retry
    //   </ApiRetryButton>
    // </ApiFailureView>
    // )

    // const retryButtonClicked=()=>{
    //     searchOnClick()
    // }

    // const getApiAllCardsResults=()=>{
    //   const {apiStatus}=props
    //   switch (apiStatus) {
    //     case apiStatusContainer.inProgress:
    //       return getLoader();
    //     case apiStatusContainer.failure:
    //       return getFailure();
    //     case apiStatusContainer.success:
    //       return getSuccess();
    //     default:
    //       return ;
    //   }
    // }

    return (
        <ReuseDiv width="99%" display="flex" fD="column" jC="center" aI="center">
            {getSuccess()}
        </ReuseDiv>
    )
}


export default AllCards