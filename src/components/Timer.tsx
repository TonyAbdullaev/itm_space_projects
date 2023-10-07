import React, {FC, memo} from 'react';
import {TimerDivider, TimerParts, TimerSection} from "../assets/styles/app.styles";
import {HourInMS, MinuteInMS, SecondInMS} from "../constants/constants";
import {ITimer} from "../models/ICommon";


const MemoTimerDivider = memo(TimerDivider)
const MemoTimerParts = memo(TimerParts)

const Timer: FC<ITimer> = ({ time }) => {
    const hour = Math.floor(time / HourInMS);
    const minutes = Math.floor(time / MinuteInMS);
    const seconds = Math.floor(time / SecondInMS);
    const miliseconds = time % 1000;
    return (
        <TimerSection>
            <MemoTimerParts>{hour < 10 ? "0" + hour : hour }</MemoTimerParts>
            <MemoTimerDivider>:</MemoTimerDivider>
            <MemoTimerParts>{minutes % MinuteInMS === 0 ? "00" : minutes % 60}</MemoTimerParts>
            <MemoTimerDivider>:</MemoTimerDivider>
            <MemoTimerParts>{seconds % 60 === 0 ? "00" : seconds % 60}</MemoTimerParts>
            <MemoTimerDivider>:</MemoTimerDivider>
            <MemoTimerParts>{miliseconds < 10 ? "0" + miliseconds : miliseconds }</MemoTimerParts>
        </TimerSection>
    );
};

export default memo(Timer);