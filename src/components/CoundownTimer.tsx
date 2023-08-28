import React, {memo} from 'react';
import {TimerDivider, TimerParts, TimerSection} from "../assets/styles/app.styles";
import {IDefaultTime} from "./CountdownControllers";

const CountdownTimer = (time: IDefaultTime) => {
    return (
        <TimerSection>
            <TimerParts>{time.m >= 10 ? time.m : "0" + time.m}</TimerParts>
            <TimerDivider>:</TimerDivider>
            <TimerParts>{time.s >= 10 ? time.s : "0" + time.s}</TimerParts>
        </TimerSection>
    );
};

export default memo(CountdownTimer);