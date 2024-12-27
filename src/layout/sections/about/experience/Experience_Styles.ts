import styled from "styled-components";
import {theme} from "../../../../styles/Theme";
import {font} from "../../../../styles/Common";


//Experience_Styles


const Experience_Styles = styled.div`
    padding: 0 8px 0 2px;
    position: relative;

    ::before {
        content: "";
        width: 100%;
        max-width: 696px;
        height: 1px;
        background: #ebeaed;
        position: absolute;
        bottom: 0;
        left: 2px;
        @media ${theme.media.tablet} {
            bottom: -20px;
        }
    }
`


//PositionDeadlines


const PositionDeadlines = styled.div`
    height: 30px;


`

const Position = styled.span`
    ${font({weight: 400, Fmin: 18, Fmax: 20})};
    line-height: 1.4;
    letter-spacing: 0.05em;
    color: ${theme.colors.textFont};
`

const Deadlines = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    font-weight: 600;
    font-size: 9px;
    line-height: 2.88889;
    text-align: center;
    border-radius: 100px;
    width: 84px;
    height: 24px;
    border: 1px solid rgba(220, 86, 236, 0.82);
    background: linear-gradient(90deg, #13b0f5 2.6%, #e70faa 100%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
`


//Localization


const Localization = styled.div`
    display: flex;
    justify-content: space-between;
    ${font({weight: 500, Fmin: 10, Fmax: 12})};
    line-height: 2.33333;
    letter-spacing: 0.08em;
    color: ${theme.colors.menuFont};
    margin: 10px 0 24px;

    @media ${theme.media.mobile} {
        flex-direction: column;
        align-items: flex-start;
        margin: 0;
        gap: 35px
    }
`
const WrapperLocalization = styled.div`
    display: flex;
    justify-content: space-between;
    width: 100%;
    max-width: 50%;
    align-items: center;
    height: 17px;

    @media ${theme.media.tablet} {
        flex-direction: column;
        align-items: flex-start;
    }
    @media ${theme.media.mobile} {
        max-width: 100%;
    }
`
const DataCompany = styled.span`
    
`
const DataPlace = styled.span`

`
const DataTime = styled.span`
    display: flex;
    align-items: center;
    height: 17px;
    
`


export const S = {
    Experience: Experience_Styles,
    PositionDeadlines,
    Position,
    Deadlines,
    Localization,
    WrapperLocalization,
    DataCompany,
    DataPlace,
    DataTime,

}