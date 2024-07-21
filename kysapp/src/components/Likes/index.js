import React, { useState, useEffect  } from "react";
import Cookies from 'js-cookie';
import Header from "../Header";
import { HomeDiv } from "../Home/styledComponents";
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

const Likes = () => {
    const [search, setSearch] = useState("");
    const [activeFilterId, setActiveFilterId] = useState("");
    const [fetchedData, setFetchedData] = useState([]);
    const [apiStatus, setApiStatus] = useState(apiStatusContainer.initial);


    const onSearchInputChange = (event) => {
        setSearch(event.target.value);
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
        const apiUrl = `http://localhost:8000/all_likes?search=${searchQuery}&userid=${userId}`;
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
            //console.log(formattedData);
            setFetchedData(formattedData);
            setApiStatus(apiStatusContainer.success);
        } else {
            setApiStatus(apiStatusContainer.failure);
        }
    };

    useEffect(() => {
        getAllHomeApi(search);
    }, []);  // Call getAllHomeApi when component mounts

    

    const searchOnClick = () => {
        getAllHomeApi(search);
    };

    const cancelOnClick = () => {
        setSearch("");
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
        <HomeDiv display="flex" fD="column" jC="flex-start" aI="center" bg="#A4B494" width="100vw" height="100vh">
            <Header />
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

export default Likes;
