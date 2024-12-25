import styled from "styled-components";
import {theme} from "../styles/Theme";
import {font} from "../styles/Common";

export const AboutTitle = styled.h3`
    ${font({ weight: 700, Fmin: 28, Fmax: 42 })};
    letter-spacing: -0.01em;
    color: ${theme.colors.textFont};
`

