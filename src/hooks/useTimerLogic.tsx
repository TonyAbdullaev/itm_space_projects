import {useCallback, useEffect, useState} from 'react';

const UseTimerLogic = () => {
    const [time, setTime] = useState(0);
    const [interv, setInterv] = useState(0);
    const [isStarted, setStarted] = useState(false);



    const runTime = () => {
        setTime(prevState => prevState + 10)
    }

    useEffect(() => {
        if (isStarted) {
            setInterv(window.setInterval(runTime, 10))
            // setTime(prevState => prevState + 10)
            setStarted(false);

        }
    }, [isStarted, time])




    const startHandler = useCallback(() => {
        setStarted(true)
    }, [])

    const pauseHandler = useCallback(() => {
        setStarted(false)
        clearInterval(interv)
        setInterv(0)
    }, [interv])

    const resetHandler = useCallback(() => {
        setStarted(false)
        clearInterval(interv)
        setInterv(0)
        setTime(0)
    }, [interv])

    return {time, setTime, interv, setInterv, isStarted, runTime, startHandler, pauseHandler, resetHandler};
};

export default UseTimerLogic;