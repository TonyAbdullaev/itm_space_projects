import React, {useCallback, useEffect, useState} from "react";
import {
    maxMinute,
    maxSecond,
    minMinute,
    minSecond, MinuteInMS, SecondInMS,
} from "../constants/constants";
import {IGetPercentage} from "../models/ICountdown";



const useCountdown = () => {
    const [isStarted, setStarted] = useState<boolean>(false);
    const [interv, setInterv] = useState<number>(0);
    const [time, setTime] = useState<number>(0);
    const [sliderTime, setSliderTime] = useState<number>(0);
    const [minutes, setMinutes] = useState<number>(0);
    const [seconds, setSeconds] = useState<number>(0);
    const [fullTime, setFullTime] = useState(minutes * MinuteInMS + seconds * SecondInMS);


    const getPercentage = ({fullTime, time}: IGetPercentage) => {
        const onePercent = fullTime / 100;
        return time / onePercent;
    }

    const runTime = () => {
        setTime(prevState => prevState - 10)
    }

    useEffect(() => {
        const newMinute = minutes * MinuteInMS;
        const newSecond = seconds * SecondInMS;
        const newTime = newMinute + newSecond;
        setTime(newTime);
        setFullTime(newTime);
        setSliderTime(newTime / SecondInMS);
    }, [minutes, seconds])

    useEffect(() => {
        if (time === 0) {
            clearInterval(interv);
            setTime(0);
            setMinutes(0);
            setSeconds(0);
            setStarted(false);
            setSliderTime(0);
            return setInterv(0);
        }
        if (isStarted) {
            setInterv(window.setInterval(runTime, 10))
            setStarted(false);
        }
    }, [isStarted, time, interv])

    const startHandler = useCallback(() => {
        setStarted(true);
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

    const onSliderChange = (num : number) => {
        const newMinute = Math.floor(num / 60);
        const newSecond = num % 60;
        setMinutes(newMinute);
        setSeconds(newSecond);
        setTime(num);
        setSliderTime(num);
    };
    
    const minuteChange = (event: React.ChangeEvent<HTMLInputElement>): void => {
        const val: number = Math.max(minMinute, Math.min(maxMinute, Number(event.target.value)));
        setMinutes(val);
    };

    const secondChange = (event: React.ChangeEvent<HTMLInputElement>): void => {
        const val: number = Math.max(minSecond, Math.min(maxSecond, Number(event.target.value)));
        setSeconds(val);
    };

    return {
        fullTime,
        isStarted,
        getPercentage,
        interv,
        time,
        sliderTime,
        minutes,
        seconds,
        setSliderTime,
        runTime,
        startHandler,
        pauseHandler,
        resetHandler,
        minuteChange,
        secondChange,
        onSliderChange,
    };
}

export default useCountdown;