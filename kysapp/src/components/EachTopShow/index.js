
// import { ReuseDiv } from "../Login/styledComponents"
import { EachTopItem, HiddenRadioInput,Card,Row,Icon,Description } from "./styledComponents"

const EachTopShow=(props)=>{
    const {eachTopShow}=props
    // const {id}=eachTopShow
    const {id,show,channel}=eachTopShow

    return (
        <EachTopItem>
            <HiddenRadioInput type="radio" name="slide" id={`c${id}`} />
            <Card htmlFor={`c${id}`}>
                <Row>
                    <Icon>{" "}</Icon>
                    <Description className="description">
                        <h4>{show}</h4>
                        <p>{channel}</p>
                    </Description>
                </Row>
            </Card>
        </EachTopItem>
    )
}

export default EachTopShow