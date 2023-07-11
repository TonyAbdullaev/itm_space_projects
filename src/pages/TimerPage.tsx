import React, {useCallback, useState} from 'react';
import Timer from "../components/Timer";
import TimerControllers from "../components/TimerControlers";
import {Stack} from "@mui/material";

const TimerPage = () => {
    const defaultTime = {ms: 0, s: 0, m:0, h: 0}
    const [time, setTime] = useState(defaultTime);
    const [interv, setInterv] = useState(0)
    const [status, setStatus] = useState(0)
    // status 0 = not started | status 1 = started | status 2 = paused


    let updateMs: number = time.ms,
        updateS: number = time.s,
        updateM: number = time.m,
        updateH: number = time.h;

    const runTime = () => {
        setStatus(1)
        if (updateM === 60) {
            updateH++;
            updateM = 0;
        }
        if (updateS === 60) {
            updateM++;
            updateS = 0;
        }
        if (updateMs === 100) {
            updateS++;
            updateMs = 0;
        }
        updateMs++;
        return setTime({ ...defaultTime, ms: updateMs, s: updateS, m: updateM, h: updateH });
    }

    const startHandler = useCallback(() => {
        runTime();
        setInterv(window.setInterval( runTime, 10))
    }, [])

    const pauseHandler = useCallback(() => {
        clearInterval(interv)
        setStatus(2)
    }, [status])

    const resetHandler = useCallback(() => {
        clearInterval(interv)
        setTime(defaultTime)
        setStatus(0)
    }, [status])

    return (
        <Stack spacing={2}>
            <h2>Timer</h2>
            <Timer time={time} />
            <TimerControllers start={startHandler} pause={pauseHandler} reset={resetHandler} status={status} />
        </Stack>
    );
};

export default TimerPage;