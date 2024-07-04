import EachTab from '../EachTab'
import {TabsDiv} from './styledComponents'

const TabsContainer=(props)=>{
    const {activeTabId,changeTab,tabsList}=props

    return (
        <TabsDiv as="ul" display="flex" fD="row" jC="center" aI="center" width="50%" swidth="99%" >
            {
                tabsList.map(eachTab=>(
                    <EachTab key={eachTab.tabId} eachTab={eachTab} activeTabId={activeTabId} changeTab={changeTab}/>
                ))
            }
        </TabsDiv>
    )
}

export default TabsContainer