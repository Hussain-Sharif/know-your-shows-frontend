import { Component } from "react"
import Cookies from 'js-cookie'
import { ReuseText } from "../Login/styledComponents"
import TopCardsDiv from "./styledComponents"
import TabsContainer from "../TabsContainer"
import SelectedLanguage from '../SelectedLanguage'

const tabsList=[
    {
        tabName:"Telugu",
        tabId:"L-1",
        pathName:"/toptelugu"
    },
    {
        tabName:"Hindi",
        tabId:"L-2",
        pathName:"/tophindi"
    },
    {
        tabName:"English",
        tabId:"L-3",
        pathName:"/topenglish"
    }
]

const apiStatusContainer= {
    success: 'SUCCESS',
    failure: 'FAILURE',
    inProgress: 'LOADER',
    initial: 'INITIAL',
  }

class TopCards extends Component{
    state={
        activeTabId:tabsList[0].tabId,
        apiStatus:apiStatusContainer.initial,
        fetchedData:[],
    }

    componentDidMount(){
        this.getTopLanguageApi()
    }

    getTopLanguageApi=async()=>{
        this.setState({apiStatus:apiStatusContainer.inProgress})
        const {activeTabId}=this.state
        const activeTab=tabsList.filter(eachTab=>eachTab.tabId===activeTabId)[0]
        const {pathName}=activeTab
        const jwtToken=Cookies.get("jwt_token")
        console.log("Top cards:",{jwtToken},{pathName})
        const apiUrl=`http://localhost:8000${pathName}`
        const options = {
            method: 'GET',
            headers: {
              Authorization: `Bearer ${jwtToken}`,
            },
          }
          const response = await fetch(apiUrl, options)
          const data = await response.json()
          const formatedData=data.map(eachItem=>({
            channelId:eachItem.channel_id,
            startOfShow:eachItem.start_of_show,
            endOfShow:eachItem.end_of_show,
            ...eachItem
          }))
          console.log("Top Language of:",pathName,formatedData)
          this.setState({fetchedData:formatedData,apiStatus:apiStatusContainer.success})
    }

    changeTab=(clickedTabId)=>{
        console.log("Tab Selected ID: ",clickedTabId)
        this.setState({activeTabId:clickedTabId},this.getTopLanguageApi)
    }

    render(){
        const {activeTabId,fetchedData}=this.state
        console.log({activeTabId,fetchedData})
        return(
            <TopCardsDiv >
                <ReuseText as="h1" aS="flex-start" sml="10px" ml="30px" mt="30px" fS="30px">Top Shows</ReuseText>
                <TabsContainer tabsList={tabsList} activeTabId={activeTabId} changeTab={this.changeTab}/>
                <SelectedLanguage fetchedData={fetchedData}/> 
            </TopCardsDiv>
        )
    }
}
export default TopCards