import React, { useState } from "react";
import StyledBox from "./styled_components/StyledBox";
import StyledButton from "./styled_components/StyledButton";
import StyledContainer from "./styled_components/StyledContainer";

const Tabs = (props) => {
    const [displayedTab, setDisplayedTab] = useState(0);

    let tabButtons = props.array.map( (item, index) => <StyledButton key={index} onClick={() => {setDisplayedTab(index)}}>{item.label}</StyledButton>);
    let tabInfo = props.array.map( (item, index) => <p key={index}>{item.content}</p>);

    return (
        <StyledContainer>
            <div>
                {tabButtons}
            </div>
            <StyledBox>
                {tabInfo[displayedTab]}
            </StyledBox>
        </StyledContainer>
        );
};

export default Tabs;