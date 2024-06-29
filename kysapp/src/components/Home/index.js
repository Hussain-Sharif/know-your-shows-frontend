import { Component } from "react";
import Header from "../Header";
import { HomeDiv } from "./styledComponents";



// const showsFilterList = [
//     {
//       label: 'Shows STARTED 30-min BACK',
//       filterId: 'STARTEDBACK',
//     },
//     {
//       label: 'Shows STARTED IN 30-min',
//       filterId: 'STARTEDIN',
//     },
//     {
//       label: 'Shows ENDED 30-min BACK',
//       filterId: 'ENDEDBACK',
//     },
//     {
//       label: 'Shows ENDED IN 30-min',
//       filterId: 'ENDEDIN',
//     },
//   ]

// const apiStatusContainer= {
//     success: 'SUCCESS',
//     failure: 'FAILURE',
//     inProgress: 'LOADER',
//     initial: 'INITIAL',
//   }



class Home extends Component{
    state={
        search:"",
        filterId:"",
        fetchedData:null
    }

    render(){
        const {search,filterId,fetchedData}=this.state
        console.log({search,filterId,fetchedData})

        return(
            <HomeDiv display="flex" fD="column" jC="flex-start" aI="center" bg="#A4B494" width="100vw" height="100vh">
                <Header/>
                {/* <TopCards/>
                <SearchFilter search={search} filterId={filterId}/>
                <AllCards fetchedData={fetchedData}/> */}
            </HomeDiv>
        )
    }
}

export default Home