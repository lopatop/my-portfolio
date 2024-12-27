import styled from "styled-components";
import {theme} from "../../../styles/Theme";
import {font} from "../../../styles/Common";


//About

const About = styled.section`

`
const AboutWrapper = styled.div`
    max-width: 710px;
    
`

//AboutMe

const AboutMe = styled.div`
    
    display: flex;
    flex-direction: column;
    gap: 38px;
    
    @media ${theme.media.mobile} {
    gap: 30px;
}
    
`

const AboutMeInfo = styled.p`
    
    ${font({ weight: 400, Fmin: 16, Fmax: 18 })};
    line-height: 1.44444;
    color: ${theme.colors.menuFont}
`

//MyWorks

const MyWorks = styled.div`
    
`

//Education

const Education = styled.div`
display: flex;
flex-direction: column;
    gap: 30px;
`

export const S = {
    About,
    AboutWrapper,
    AboutMe,
    AboutMeInfo,
    MyWorks,
    Education,

}