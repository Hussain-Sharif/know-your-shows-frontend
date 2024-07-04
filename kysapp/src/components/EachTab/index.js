import {TabItem,TabButton} from '../TabsContainer/styledComponents'

const EachTab=(props)=>{
    const {eachTab,activeTabId,changeTab}=props
    const {tabId,tabName}=eachTab
    const tabBtnClicked=()=>{
        changeTab(tabId)
    }

    return (
        <TabItem as="li" display="flex" fD="column" jC="center" aI="center">
            <TabButton type="button" onClick={tabBtnClicked} isClicked={activeTabId===tabId}>{tabName}</TabButton>
        </TabItem>
    )
}

export default EachTab