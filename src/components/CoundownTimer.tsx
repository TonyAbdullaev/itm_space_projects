import React, {FC, memo} from 'react';
import {TimerDivider, TimerParts, TimerSection} from "../assets/styles/app.styles";
import {CountdownTimerParams} from "../models/ICountdown";



const CountdownTimer:FC<CountdownTimerParams> = ({ minutes, seconds }) => {
    return (
        <TimerSection>
            <TimerParts>{minutes}</TimerParts>
            <TimerDivider>:</TimerDivider>
            <TimerParts>{seconds}</TimerParts>
        </TimerSection>
    );
};

export default memo(CountdownTimer);