import SelectedLanguageDiv from './styledComponents'
import { ReuseDiv } from "../Login/styledComponents";
import EachTopShow from "../EachTopShow";




const SelectedLanguage=(props)=>{
        const {fetchedData}=props
        console.log({fetchedData},"Top Languages")
        return (
          <ReuseDiv sOf="hidden" height="250px" display="flex" fD="column" jC="flex-start" aI="center" width="70%" swidth="99%">
            <SelectedLanguageDiv as="ul" >
            {
              fetchedData.map(eachTopShow=>(
                <EachTopShow key={eachTopShow.id} eachTopShow={eachTopShow}/>
              ))
            }
          </SelectedLanguageDiv>
          </ReuseDiv>
        )
      }

export default SelectedLanguage