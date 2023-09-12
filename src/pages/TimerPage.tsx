import {useState} from 'react';
import Timer from "../components/Timer";
import TimerControllers from "../components/TimerControlers";
import {defaultTime} from "../constants/constants";

const TimerPage = () => {
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

    const startHandler = () => {
        runTime();
        setInterv(window.setInterval( runTime, 10))
    }

    const pauseHandler = () => {
        clearInterval(interv)
        setStatus(2)
    }

    const resetHandler = () => {
        clearInterval(interv)
        setTime({ms: 0, s: 0, m:0, h: 0})
        setStatus(0)
    }

    return (
        <>
            <Timer time={time} />
            <TimerControllers start={startHandler} pause={pauseHandler} reset={resetHandler} status={status} />
        </>
    );
};

export default TimerPage;