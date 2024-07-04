import { Component } from "react";
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

// const apiStatusContainer= {
//     success: 'SUCCESS',
//     failure: 'FAILURE',
//     inProgress: 'LOADER',
//     initial: 'INITIAL',
//   }



class Home extends Component{
    state={
        search:"",
        activeFilterId:"",
        fetchedData:null
    }

    onSearchInputChange=(event)=>{
        this.setState({search:event.target.value})
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
        const {search,activeFilterId,fetchedData}=this.state
        console.log({search,activeFilterId,fetchedData})

        return(
            <HomeDiv display="flex" fD="column" jC="flex-start" aI="center" bg="#A4B494" width="100vw" height="100vh">
                <Header/>
                <TopCards/>
                <SearchFilter search={search} showsFilterList={showsFilterList} onFilterChange={this.onFilterChange} onSearchInputChange={this.onSearchInputChange} activeFilterId={activeFilterId}/>
                {/* <AllCards fetchedData={fetchedData}/> */}
            </HomeDiv>
        )
    }
}

export default Home