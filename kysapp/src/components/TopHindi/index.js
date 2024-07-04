import { Component } from "react";


const apiStatusContainer= {
        success: 'SUCCESS',
        failure: 'FAILURE',
        inProgress: 'LOADER',
        initial: 'INITIAL',
      }

class TopHindi extends Component{
    state={
        apiStatus:apiStatusContainer.initial,
        fetchedDataTelugu:null,
        fetchedDataHindi:null,
        fetchedDataEnglish:null
    }

    componentDidMount(){
        this.getTopTeluguApi()
        this.getTopHindiApi()
        this.getTopEnglishApi()
    }

    getTopTeluguApi=async()=>{
        this.setState({apiStatus:apiStatusContainer.inProgress})
        const apiUrl=`${process.env.REACT_APP_SERVER_API}/toptelugu`
        const options = {
            method: 'GET',
            headers: {
              'Content-Type': 'application/json',
            }
          }
          const response = await fetch(apiUrl, options)
          const data = await response.json()
          const formatedData=data.map(eachItem=>({
            channelId:eachItem.channel_id,
            startOfShow:eachItem.start_of_show,
            endOfShow:end_of_show,
            ...eachItem
          }))
          this.setState({fetchedData:formatedData,apiStatus:apiStatusContainer.success})
    }

    getTopTeluguApi=async()=>{
        this.setState({apiStatus:apiStatusContainer.inProgress})
        const apiUrl=`${process.env.REACT_APP_SERVER_API}/toptelugu`
        const options = {
            method: 'GET',
            headers: {
              'Content-Type': 'application/json',
            }
          }
          const response = await fetch(apiUrl, options)
          const data = await response.json()
          const formatedData=data.map(eachItem=>({
            channelId:eachItem.channel_id,
            startOfShow:eachItem.start_of_show,
            endOfShow:end_of_show,
            ...eachItem
          }))
          this.setState({fetchedData:formatedData,apiStatus:apiStatusContainer.success})
    }

    getTopTeluguApi=async()=>{
        this.setState({apiStatus:apiStatusContainer.inProgress})
        const apiUrl=`${process.env.REACT_APP_SERVER_API}/toptelugu`
        const options = {
            method: 'GET',
            headers: {
              'Content-Type': 'application/json',
            }
          }
          const response = await fetch(apiUrl, options)
          const data = await response.json()
          const formatedData=data.map(eachItem=>({
            channelId:eachItem.channel_id,
            startOfShow:eachItem.start_of_show,
            endOfShow:end_of_show,
            ...eachItem
          }))
          this.setState({fetchedData:formatedData,apiStatus:apiStatusContainer.success})
    }

    render(){
        
    }

}

export default TopHindi