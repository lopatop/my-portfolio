import React from 'react';
import {AboutTitle} from "../../../../components/AboutTitle";
import { S } from '../About_Styles';
import {Experience} from "../experience/Experience";

const eduCationData = [
    {
        name: "Bachelor in Electronic",
        time: "Aug 2015 - Dec 2020",
        place: "Bangalore Instutute",
        company: "Bengaluru",
        deadline: "Full Time",
    },
    {
        name: "Bachelor in Electronic",
        time: "Aug 2015 - Dec 2020",
        place: "Bangalore Instutute",
        company: "Bengaluru",
        deadline: "Full Time",
    },
]

export const Education: React.FC = () => {
    return (
        <S.Education>
            <AboutTitle>Education</AboutTitle>
            {eduCationData.map((e, index) => {
                return <Experience name={e.name}
                                   deadline={e.deadline}
                                   company={e.company}
                                   place={e.place}
                                   time={e.time}
                                   key={index}/>
            })}
        </S.Education>
    );
};

