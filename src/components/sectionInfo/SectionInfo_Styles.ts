import styled from "styled-components";
import {font} from "../../styles/Common";
import {theme} from "../../styles/Theme";

const TitleWrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
`
const SectionTitle = styled.h2`
    ${font({weight: 700, Fmax: 48, Fmin: 36})}
    color: ${theme.colors.textFont};


`
const TitleInfo = styled.h3<{ padding?: string }>`
    padding: ${props => props.padding || "0px"};
    ${font({weight: 400, Fmax: 32, Fmin: 20})}
    color: ${theme.colors.menuFont};
    @media ${theme.media.mobile} {
        text-align: center;
        padding: 25px 0 60px;
    }
}

`

export const S = {
    TitleInfo,
    TitleWrapper,
    SectionTitle,
}