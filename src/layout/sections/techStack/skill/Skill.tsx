import React from 'react';
import styled from "styled-components";
import {Icon} from "../../../../components/icon/Icon";

type SkillPropsType = {
    iconId: string
    width: string
    height: string
    viewBox: string

    // title?: string
    // description?: string
}

export const Skill = (props:SkillPropsType) => {
    return (
        <StyledSkill>
            <Icon iconId={props.iconId} width={props.width} height={props.height} viewBox={props.viewBox} />
            {/*<SkillTitle title={props.title}/>*/}
            {/*<SkillText title={props.description}/>*/}
        </StyledSkill>
    );
};
const StyledSkill = styled.div`
width: 25%;
    justify-content: center;
    align-items: center;
`
const SkillTitle = styled.h3`

`
const SkillText = styled.span`

`
