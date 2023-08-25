import React, {memo} from 'react';
import {Title1} from "../assets/styles/app.styles";

interface ITimerTitle {
    title: string
}

const TimerTitle = ({title}: ITimerTitle) => {
    return <Title1>{title}</Title1>
};

export default memo(TimerTitle);