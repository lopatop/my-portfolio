import React from 'react';
import {Link} from "./link/Link";
import { S } from '../../Works_Styles';

export const WorkLink: React.FC = () => {
    return (
        <S.WorkLink>
            <Link iconId={'link'} viewBox={'0 0 25 25'} href={'#'} text={'Live Preview'}/>
            <Link iconId={'github'} href={'#'} text={'View Code'}/>
        </S.WorkLink>
    );
};

