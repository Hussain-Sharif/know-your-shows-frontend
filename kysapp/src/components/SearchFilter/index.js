import { useState } from "react"
import { HiddenRadioInput } from "../EachTopShow/styledComponents"
import { ReuseDiv, ReuseText } from "../Login/styledComponents"
import {InputElement,SearchIcon,FilterIcon,ClearFilterIcon,SearchButton,TagsDiv,Tag,FilterDiv} from './styledComponents'


const SearchFilter =(props)=>{

    const [isFilterOpened,setFilter]=useState(false)

    const onFilterClick=()=>{
        setFilter((prev)=>(!prev))
        onFilterChange("")
    }

    const{search,activeFilterId,onFilterChange,onSearchInputChange,showsFilterList}=props
    
    const searchChange=(event)=>{
        onSearchInputChange(event)
    }

    const inputRadioChange=(event)=>{
        onFilterChange(event)
    }

    console.log({isFilterOpened})

    return(
        <ReuseDiv mb="30px"  mt="30px" width="100%" pl="10px" pr="10px" display="flex" fD="column" sfD="column" sjC="flex-start" saI="center" jC="flex-start" aI="center" >
            <ReuseText color="#000" as="h1" aS="flex-start" mb="20px">Search Shows</ReuseText>
            <ReuseDiv ml="20px"  bRadius="18px" bg="#382933"  width="80%" swidth="95%" display="flex" fD="column" jC="center" aI="center" sml="0" smb="10px">
                <ReuseDiv bg="#A4B494" p="10px" bRadius="18px" border="#000 solid 2px" display="flex" fD="row" width="100%" jC="flex-start" ai="center">
                    <InputElement onChange={searchChange}
                    type="search"
                    value={search}
                    placeholder="Search by...."/>
                    <SearchButton type="button"><SearchIcon/></SearchButton>
                </ReuseDiv>
                <TagsDiv >
                    <Tag>
                        Language
                    </Tag>
                    
                    <Tag>
                        Channel Name
                    </Tag>
                    <Tag>
                        Show Name
                    </Tag>
                    <Tag>
                        Genre
                    </Tag>

                </TagsDiv>
            </ReuseDiv>

            <ReuseDiv width="78%" mt="10px" swidth="95%"   display="flex" fD="row" sfD="column" jC="flex-start" aI="flex-start">
                <ReuseDiv  display="flex" sDisplay="flex" sjC="space-between" swidth="99%" >
                    <ReuseText fS="24px" as="h1" color="#000" fW="bolder">Select Filter</ReuseText>
                    
                    <SearchButton type="button" onClick={onFilterClick}>
                        {
                            activeFilterId===""?<FilterIcon />:<ClearFilterIcon/>
                        }
                    </SearchButton>
                </ReuseDiv>

                <FilterDiv bRadius="16px"  border="#009b37 solid 2px" width="100%" filterDisplay={isFilterOpened} sml="0" ml="70px"as="ul">
                    {
                        showsFilterList.map(eachItem=>(
                            <ReuseDiv bg={`${(activeFilterId===eachItem.filterId)?"#009b37":"transparent"}`} p="5px" b="white solid 1px" bRadius="14px"  m="10px" as="li" key={eachItem.filterId} >
                                <HiddenRadioInput onChange={inputRadioChange}
                                type="radio"
                                id={eachItem.filterId}
                                value={eachItem.filterId}
                                name="Timining"/>
                                <ReuseText  color={`${(activeFilterId===eachItem.filterId)? "#fff":"#382933"}`} fW="bolder" as="label" ml="5px" fS="16px" htmlFor={eachItem.filterId}>{eachItem.label}</ReuseText>      
                            </ReuseDiv>
                        ))
                    }
                </FilterDiv>
            </ReuseDiv>
        </ReuseDiv>
    )

}


export default SearchFilter