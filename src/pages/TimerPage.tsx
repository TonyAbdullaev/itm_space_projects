import {memo} from 'react';
import Timer from "../components/Timer";
import TimerControllers from "../components/TimerControlers";
import useTimerLogic from "../hooks/useTimerLogic";

const TimerPage = () => {
    const {time,startHandler, pauseHandler, resetHandler, interv} = useTimerLogic()
    return (
        <>
            <Timer time={time} />
            <TimerControllers interv={interv} start={startHandler} pause={pauseHandler} reset={resetHandler} />
        </>
    );
};

export default memo(TimerPage);