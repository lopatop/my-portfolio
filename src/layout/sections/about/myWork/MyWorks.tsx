import React from 'react';
import {AboutTitle} from "../../../../components/AboutTitle";
import {FlexWrapper} from "../../../../components/FlexWrapper";
import { S } from '../About_Styles';
import {Experience} from "../experience/Experience";

const MyWorksData = [
    {
        name: "Junior Web Developer",
        time: "Sep 2021 - Dec 2021",
        place: "Bengaluru",
        company: "Dr.Rajkumars Learning App",
        deadline: "Full Time",
    },
    {
        name: "Junior Web Developer",
        time: "Sep 2021 - Dec 2021",
        place: "Bengaluru",
        company: "Dr.Rajkumars Learning App",
        deadline: "Full Time",
    },
    {
        name: "Junior Web Developer",
        time: "Sep 2021 - Dec 2021",
        place: "Bengaluru",
        company: "Dr.Rajkumars Learning App",
        deadline: "Full Time",
    },
]

export const MyWorks: React.FC = () => {
    return (
        <S.MyWorks>
            <FlexWrapper direction="column" justify="space-between" gap="30px">
                <AboutTitle>Work Experience</AboutTitle>
                {MyWorksData.map((w, index) => {
                    return <Experience name={w.name}
                                       time={w.time}
                                       place={w.place}
                                       company={w.company}
                                       deadline={w.deadline}
                                       key={index}/>

                })}
            </FlexWrapper>
        </S.MyWorks>
    );
};

