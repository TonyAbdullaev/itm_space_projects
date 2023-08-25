import React, {memo} from 'react';
import {TimerDivider, TimerParts, TimerSection} from "../assets/styles/app.styles";

const Timer = (props: any) => {
    return (
        <TimerSection>
            <TimerParts>{props.time.h >= 10 ? props.time.h : "0" + props.time.h}</TimerParts>
            <TimerDivider>:</TimerDivider>
            <TimerParts>{props.time.m >= 10 ? props.time.m : "0" + props.time.m}</TimerParts>
            <TimerDivider>:</TimerDivider>
            <TimerParts>{props.time.s >= 10 ? props.time.s : "0" + props.time.s}</TimerParts>
            <TimerDivider>:</TimerDivider>
            <TimerParts>{props.time.ms >= 10 ? props.time.ms : "0" + props.time.ms}</TimerParts>
        </TimerSection>
    );
};

export default memo(Timer);