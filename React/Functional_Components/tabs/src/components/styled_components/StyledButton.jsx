import React from "react";
import styled, {keyframes} from 'styled-components';

const breatheAnimation = keyframes`
    0% { background-color: white; color: black; }
    100% { background-color: black; color: white; }
`;

const StyledButton = styled.button`
    margin: 0px 5px;
    padding: 5px 25px;
    border-radius: 5px;
    background-color: white;
    &:focus { 
        animation: ${breatheAnimation} 0.2s forwards;
    }
`;

export default StyledButton