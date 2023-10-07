import React, {memo} from 'react';
import {Container} from "@mui/material";
import CSlider from "../components/UI/CSlider";
import useCountdown from "../hooks/useCountdown";
import CountdownInputs from "../components/CountdownInputs";
import TimerControllers from "../components/TimerControlers";
import Timer from "../components/Timer";
import Progress from "../components/UI/Progress";

const CountdownPage = () => {
    const { time, fullTime, interv, minutes, seconds, isStarted,minuteChange,secondChange, sliderTime, setSliderTime, onSliderChange, startHandler, resetHandler, pauseHandler} = useCountdown();
    return (
        <Container maxWidth='sm' style={{ marginTop: '1rem', display: "flex", justifyContent: "space-between", flexDirection: "column" }}>
            <Timer time={time} />
            {
                interv !== 0 ? <Progress time={time} fullTime={fullTime} /> :
                    <>
                        <CountdownInputs isStarted={isStarted} minutes={minutes} seconds={seconds} minuteChange={minuteChange} secondChange={secondChange} />
                        <CSlider isStarted={isStarted} sliderTime={sliderTime} setSliderTime={setSliderTime} onSliderChange={onSliderChange} />
                    </>
            }
            <TimerControllers interv={interv} start={startHandler} pause={pauseHandler} reset={resetHandler} />
        </Container>
    );
};

export default memo(CountdownPage);