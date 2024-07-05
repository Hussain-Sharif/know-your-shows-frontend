import { Component } from "react";
import Cookies from 'js-cookie'
import Header from "../Header";
import { HomeDiv } from "./styledComponents";
import TopCards from "../TopCards";
import SearchFilter from '../SearchFilter'



const showsFilterList = [
    {
      label: 'Shows STARTED 30-min BACK',
      filterId: 'STARTEDBACK',
    },
    {
      label: 'Shows STARTED IN 30-min',
      filterId: 'STARTEDIN',
    },
    {
      label: 'Shows ENDED 30-min BACK',
      filterId: 'ENDEDBACK',
    },
    {
      label: 'Shows ENDED IN 30-min',
      filterId: 'ENDEDIN',
    },
  ]

const apiStatusContainer= {
    success: 'SUCCESS',
    failure: 'FAILURE',
    inProgress: 'LOADER',
    initial: 'INITIAL',
  }



class Home extends Component{
    state={
        search:"",
        activeFilterId:"",
        fetchedData:null,
        apiStatus:apiStatusContainer.initial,
        offSet:0,
        limit:20
    }

    onSearchInputChange=(event)=>{
        this.setState({search:event.target.value})
    }

    componentDidMount(){
      this.getAllHomeApi()
    }

    formatData=(resData)=>(resData.map(eachItem=>({
      startOfShow:eachItem.start_of_show,
      endOfShow:eachItem.end_of_show,
      channelId:eachItem.channel_id,
      ...eachItem
    })))

    getAllHomeApi=async()=>{
      this.setState({apiStatus:apiStatusContainer.inProgress})
      const jwtToken=Cookies.get("jwt_token")
      const {search,offSet,limit}=this.state
      const apiUrl=`http://localhost:4000/all?search=${search}&limit=${limit}&offset=${offSet}`
      const options={
        method:"GET",
        headers:{
          authorization:`Bearer ${jwtToken}`
        }
      }
      const response=await fetch(apiUrl,options);
      if(response.ok===true){
        const resData=await response.json()
        const formattedData=this.formatData(resData);
        console.log(formattedData);
        this.setState({fetchedData:formattedData})
      }else{
        this.setState({apiStatus:apiStatusContainer.failure})
      }
    }

    // onTimeChange=()=>{
    //     const {activeFilterId}=this.state
    //     switch (activeFilterId) {
    //         case showsFilterList[0].filterId===activeFilterId:
                
    //             break;
        
    //         default:
    //             break;
    //     }
    // }

    onFilterChange=(event)=>{
        if(event!==""){
          this.setState({activeFilterId:event.target.value})
        }else{
          this.setState({activeFilterId:event})
        }
    }

    render(){
        const {search,activeFilterId,fetchedData,apiStatus}=this.state
        console.log({search,activeFilterId,fetchedData,apiStatus}) 

        return(
            <HomeDiv display="flex" fD="column" jC="flex-start" aI="center" bg="#A4B494" width="100vw" height="100vh">
                <Header/>
                <TopCards/>
                <SearchFilter search={search} showsFilterList={showsFilterList} onFilterChange={this.onFilterChange} onSearchInputChange={this.onSearchInputChange} activeFilterId={activeFilterId}/>
                {/* <AllCards fetchedData={fetchedData} apiStatus={apiStatus}/> */}
            </HomeDiv>
        )
    }
}

export default Home