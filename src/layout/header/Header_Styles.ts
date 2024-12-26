
import styled from "styled-components";
import {Container} from "../../components/Container";
import {theme} from "../../styles/Theme";



const Header = styled.header`
    padding-top: 40px;
    position: sticky;
    top: 0;
    left: 0;
    right: 0;
    z-index: 99999;
    // ${Container}{
    //    
    // }
    
    &.backGround {
        background-color: rgba(31, 31, 32, 0.9);
    }
`
const InfoWrapper = styled.div`
    display: flex;
    align-items: center;
    gap: 55px;
    font-family: "DM Sans", sans-serif;
    font-weight: 500;
    font-size: 20px;
    line-height: 1.3;
    text-align: center;
    @media ${theme.media.desktop} {
        display: none ;
    }
 
    
`

export const S = {
    Header,
    InfoWrapper,
}