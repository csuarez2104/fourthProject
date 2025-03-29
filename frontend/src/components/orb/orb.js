import React from "react";
import styled, {keyframes} from 'styled-components';
import {useWindowSize} from '../../utils/useWindowSize';

function Orb(){

    const {width, height} = useWindowSize();

    console.log(width, height);

    const moveOrb = keyframes`
        0%{
            transform: translate(0,0);
        }
        50%{
            transform: translate(${width / 1.2}px, ${height / 1.5}px);
        }
        100%{
            transform: translate(0,0);
        }
    `;

    // Styled component for the orb
    const OrbStyled = styled.div`
        width: 70vh;
        height: 70vh;
        background-color: linear-gradient(180deg,rgb(235, 37, 235) 0%,rgb(207, 7, 44) 100%);
        border-radius: 50%;
        position: absolute;
        margin-top: -37vh;
        marging-left: -37vh;
        filter: blur(400px);
        animation: ${moveOrb} 15s linear infinite;
    `;
    return(
        <OrbStyled></OrbStyled>
    )
}

export default Orb;