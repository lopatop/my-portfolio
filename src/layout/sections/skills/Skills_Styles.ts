import styled from "styled-components";
import {theme} from "../../../styles/Theme";


const Skills = styled.section`
    position: relative;
    padding-top: 145px;
    
    @media ${theme.media.mobile} {
        padding-top: 20px;
    }
    
    
`

const Skill = styled.div`
    width: 25%;
    height: 170px;
    padding-bottom: 50px;
    display: flex;
    justify-content: space-around;
    @media ${theme.media.mobile} {
        width: 50%;
    }
    
`

export const S = {
    Skills,
    Skill,

}