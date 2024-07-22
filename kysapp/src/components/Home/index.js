import React, { useState, useEffect ,useRef } from "react";
import Cookies from 'js-cookie';
import Header from "../Header";
import { HomeDiv } from "./styledComponents";
import TopCards from "../TopCards";
import SearchFilter from '../SearchFilter';
import AllCards from '../AllCards';

const showsFilterList = [
    { label: 'Shows STARTED 30-min BACK', filterId: 'STARTEDBACK' },
    { label: 'Shows STARTED IN 30-min', filterId: 'STARTEDIN' },
    { label: 'Shows ENDED 30-min BACK', filterId: 'ENDEDBACK' },
    { label: 'Shows ENDED IN 30-min', filterId: 'ENDEDIN' },
];

const apiStatusContainer = {
    success: 'SUCCESS',
    failure: 'FAILURE',
    inProgress: 'LOADER',
    initial: 'INITIAL',
};

const Home = () => {
    const [search, setSearch] = useState("");
    const [activeFilterId, setActiveFilterId] = useState("");
    const [fetchedData, setFetchedData] = useState([]);
    const [apiStatus, setApiStatus] = useState(apiStatusContainer.initial);
    const [limit, setLimit] = useState(10);
    const [previousDataLengthCheck,setPreviousDataLengthCheck]=useState(1);

    const homeDivRef = useRef(null);

    const onSearchInputChange = (event) => {
        setSearch(event.target.value);
    };

    const handleInfiniteScroll = async() => {
      const homeDiv = homeDivRef.current;
        //console.log(" HOME-PAGE height of the entire document in pixels: ", homeDiv.scrollHeight);
        //console.log(" HOME-PAGE height of the viewport in pixels: ", homeDiv.clientHeight);
        //console.log(" HOME-PAGE number of pixels the document has been scrolled: ", homeDiv.scrollTop);
        try {
          if (
            (homeDiv.clientHeight+ homeDiv.scrollTop + 1 >=
            homeDiv.scrollHeight) && (previousDataLengthCheck===1)
          ) {
            //console.log("HOME-PAGE Is it Reloaded BRO? <<==")
            setLimit(prev=>prev+10)
          }
        } catch (error) {
          //console.log(error);
        }
      };

    const formatData = (resData) => resData.map(eachItem => ({
        startOfShow: eachItem.start_of_show,
        endOfShow: eachItem.end_of_show,
        channelId: eachItem.channel_id,
        ...eachItem
    }));

    const getAllHomeApi = async (searchQuery) => {
        setApiStatus(apiStatusContainer.inProgress);
        const jwtToken = Cookies.get("jwt_token");
        const userId = Cookies.get("user_id");
        const apiUrl = `https://know-your-shows-production.up.railway.app/all?search=${searchQuery}&limit=${limit}&offset=${0}&userid=${userId}`;
        const options = {
            method: "GET",
            headers: {
                authorization: `Bearer ${jwtToken}`
            }
        };
        const response = await fetch(apiUrl, options);
        if (response.ok === true) {
            const resData = await response.json();
            const formattedData = formatData(resData);
            if(formattedData.length===fetchedData.length){
                setPreviousDataLengthCheck(0)
            }else{
                setPreviousDataLengthCheck(1)
            }
            //console.log(formattedData,previousDataLengthCheck,"<<==");
            setFetchedData(formattedData);
            setApiStatus(apiStatusContainer.success);
            
        } else {
            setApiStatus(apiStatusContainer.failure);
        }
    };

    useEffect(() => {
        getAllHomeApi(search);
    }, [limit]);  // Call getAllHomeApi when component mounts

    useEffect(() => {
      const homeDiv = homeDivRef.current;
        //console.log(" HOME-PAGE Component Did Mount");
        window.addEventListener("scroll", handleInfiniteScroll,true);
        return () => {
            //console.log(" HOME-PAGE Component Will UnMount");
            window.removeEventListener("scroll", handleInfiniteScroll,true);
        };
    }, []);

    const searchOnClick = () => {
        getAllHomeApi(search);
    };

    const cancelOnClick = () => {
        setSearch("");
        setLimit(10)
        getAllHomeApi("");
    };

    const onFilterChange = (event) => {
        if (event !== "") {
            setActiveFilterId(event.target.value);
        } else {
            setActiveFilterId(event);
        }
    };

    //console.log({ search, activeFilterId, fetchedData, apiStatus });



    return (
        <HomeDiv ref={homeDivRef} display="flex" fD="column" jC="flex-start" aI="center" bg="#A4B494" width="100vw" height="100vh">
            <Header />
            <TopCards />
            <SearchFilter
                search={search}
                cancelOnClick={cancelOnClick}
                searchOnClick={searchOnClick}
                showsFilterList={showsFilterList}
                onFilterChange={onFilterChange}
                onSearchInputChange={onSearchInputChange}
                activeFilterId={activeFilterId}
            />
            <AllCards
                cancelOnClick={cancelOnClick}
                searchOnClick={searchOnClick}
                fetchedData={fetchedData}
                apiStatus={apiStatus}
            />
        </HomeDiv>
    );
};

export default Home;
