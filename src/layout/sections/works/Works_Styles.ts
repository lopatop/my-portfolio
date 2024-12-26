import styled from "styled-components";
import {theme} from "../../../styles/Theme";
import {font} from "../../../styles/Common";


//Works

const Works = styled.section`
    position: relative;


    @media ${theme.media.mobile} {
        padding-top: 20px;
    }

`
//Work


const Work = styled.div`
    background: ${theme.colors.projectFont};
    border-radius: 20px;
    max-width: 375px;
    width: 100%;

`
const Image = styled.img`
    width: 100%;
    height: 260px;
    object-fit: cover;
    border-radius: 20px 20px 0 0;

`
const CardContainer = styled.div`
    padding: 28px 28px 25px;

    @media ${theme.media.tablet} {
        padding: 20px 20px 20px;
    }
    @media ${theme.media.mobile} {
        padding: 18px 18px 16px;
    }

`

const Title = styled.h3`
    ${font({weight: 500, Fmin: 20, Fmax: 28})};

    line-height: 0.92857;
    color: ${theme.colors.textFont};

`
const Text = styled.p`
    ${font({weight: 300, Fmin: 14, Fmax: 18})};

    line-height: 1.44444;
    padding-top: 17px;
    color: ${theme.colors.textFont};

    @media ${theme.media.mobile} {
        padding-top: 14px;
    }

`
const Paragraph = styled.p`
    padding-top: 12px;

    @media ${theme.media.mobile} {
        padding-top: 8px;
    }

`


const TextStack = styled.span`
    ${font({weight: 400, Fmin: 12, Fmax: 16})};
    line-height: 1.625;
    color: ${theme.colors.textFont};


`

const Technologies = styled.span`
    ${font({weight: 300, Fmin: 10, Fmax: 14})};
    line-height: 1.625;
    color: ${theme.colors.textFont};
`

//Link

const Link = styled.div`
    display: flex;
    gap: 3px
`
const Links = styled.a`
    ${font({weight: 400, Fmax: 16, Fmin: 14})}
    text-decoration: underline;
    text-decoration-skip-ink: none;
    color: ${theme.colors.titleFont};

    transition: transform 0.3s ease;

    :hover {
        transform: translateY(-4px);

    }

`

//WorkLink

const WorkLink = styled.div`
    display: flex;
    justify-content: space-between;
    
    padding-top: 20px;
    gap:10px;
    flex-wrap: wrap;

    @media ${theme.media.tablet} {
        
        padding-top: 10px;
    }

`


export const S = {
    Works,
    Work,
    Image,
    CardContainer,
    Title,
    Text,
    Paragraph,
    TextStack,
    Technologies,
    Link,
    Links,
    WorkLink,

}