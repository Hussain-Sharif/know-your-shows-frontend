import { useEffect, useState } from "react"
import Cookies from 'js-cookie'
import toast,{Toaster} from "react-hot-toast"
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
  const { fetchedData, cancelOnClick, searchOnClick } = props;
  const [tailoredData, setTailoredData] = useState(fetchedData);
  const [likeState, setLikeState] = useState({ showId: "", userId: "", isLiked: null });
  const [remainderState, setRemainderState] = useState({ showId: "", userId: "", isRemainded: null });


  // UseEffects For Likes and Remainders ===========>
  useEffect(() => {
    if (likeState.showId && likeState.userId) {
      if (likeState.isLiked === 1) {
        userMadeLike(likeState.showId, likeState.userId);
      } else if (likeState.isLiked === null) {
        userRemovedLike(likeState.showId, likeState.userId);
      }
    }
  }, [likeState]);
  
  useEffect(() => {
    if (remainderState.showId && remainderState.userId) {
      if (remainderState.isRemainded === 1) {
        userMadeRemainder(remainderState.showId, remainderState.userId);
      } else if (remainderState.isRemainded === null) {
        userRemovedRemainder(remainderState.showId, remainderState.userId);
      }
    }
  }, [remainderState]);

  useEffect(() => {
    setTailoredData(fetchedData);
  }, [fetchedData]);

  // API calls For Likes and Remainders ===========>

  const userRemovedLike = async (showId, userId) => {
    const jwtToken = Cookies.get("jwt_token");
    const apiUrl = `http://localhost:8000/showlikedelete?showid=${showId}&userid=${userId}`;
    const options = {
      method: "DELETE",
      headers: {
        authorization: `Bearer ${jwtToken}`,
      },
    };
    const response = await fetch(apiUrl, options);
    if(response.ok){
      const msg = await response.json();
      //console.log("On Remove Like", msg);
      toast.success(msg.success_msg)
    }
  };

  const userMadeLike = async (showid, userid) => {
    //console.log("in Like API",{showid, userid})
    const data={showid,userid}
    const jwtToken = Cookies.get("jwt_token");
    const apiUrl = `http://localhost:8000/showliked/`;
    const options = {
      method: "POST",
      headers: {
        authorization: `Bearer ${jwtToken}`,
        'Content-Type': 'application/json',
      },
      body:JSON.stringify(data)
    };
    const response = await fetch(apiUrl, options);
    if(response.ok){
      const msg = await response.json();
      //console.log("On Made Like", msg);
      toast.success(msg.success_msg)
    }
  };


  const userRemovedRemainder = async (showId, userId) => {
    const jwtToken = Cookies.get("jwt_token");
    const apiUrl = `http://localhost:8000/show_remainder_delete?showid=${showId}&userid=${userId}`;
    const options = {
      method: "DELETE",
      headers: {
        authorization: `Bearer ${jwtToken}`,
      },
    };
    const response = await fetch(apiUrl, options);
    if(response.ok){
      const msg = await response.json();
      //console.log("On Remove Remainder", msg);
      toast.success(msg.success_msg)
    }
  };

  const userMadeRemainder = async (showid, userid) => {
    //console.log("in Like API",{showid, userid})
    const data={showid,userid}
    const jwtToken = Cookies.get("jwt_token");
    const apiUrl = `http://localhost:8000/show_remainded/`;
    const options = {
      method: "POST",
      headers: {
        authorization: `Bearer ${jwtToken}`,
        'Content-Type': 'application/json',
      },
      body:JSON.stringify(data)
    };
    const response = await fetch(apiUrl, options);
    if(response.ok){
      const msg = await response.json();
      //console.log("On Made Remainder", msg);
      toast.success(msg.success_msg)
    }
  };


  // User Button Action Sync For Likes and Remainders ===========>

  const userClickedLike = (showId, userId) => {
    //console.log("User Cliked:",{showId, userId})
    const updatedData = tailoredData.map((eachShow) => {
      if (eachShow.id === showId) {
        const isLiked = eachShow.isLiked === 1 ? null : 1;
        setLikeState({ showId, userId, isLiked });
        return { ...eachShow, isLiked };
      }
      return eachShow;
    });
    setTailoredData(updatedData);
  };

  const userClickedRemainder = (showId, userId) => {
    //console.log("User Cliked Remainder:",{showId, userId})
    const updatedData = tailoredData.map((eachShow) => {
      if (eachShow.id === showId) {
        const isRemainded = eachShow.isRemainded === 1 ? null : 1;
        setRemainderState({ showId, userId, isRemainded });
        return { ...eachShow, isRemainded };
      }
      return eachShow;
    });
    setTailoredData(updatedData);
  };

    
//<<<<<<<--------------->>>>>>>>///

    //console.log(Array(fetchedData.length).fill(0))
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
                 tailoredData.map(eachItem=>(<EachCard key={eachItem.id} eachItem={eachItem} userClickedLike={userClickedLike} userClickedRemainder={userClickedRemainder}/>))
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

    //console.log("In All Cards:",{likeState})
    return (
        <ReuseDiv width="99%" display="flex" fD="column" jC="center" aI="center">
            {getApiAllCardsResults()}
            <Toaster
            position="top-right"
          />
        </ReuseDiv>
    )
}


export default AllCards