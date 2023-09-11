import React, {useEffect, useState} from 'react';
import {Button, InputLabel, Slider} from "@mui/material";
import {CoundownInput} from "../assets/styles/app.styles";
import {maxMinute, minMinute, maxSecond, minSecond, style} from "../constants/constants";
import Timer from "./Timer";

export interface IDefaultTime {
    h: number,
    m: number,
    s: number,
    ms: number,
}

const CountdownControllers = () => {
    const defaultTime: IDefaultTime = {h: 0, m: 0, s: 0, ms: 0}
    const [isStarted, setStarted] = useState(false);
    const [interv, setInterv] = useState(0)
    const [sliderTime, setSliderTime] = useState(0)
    const [time, setTime] = useState(defaultTime);

    let updateS: number = time.s,
        updateM: number = time.m;

    const runTime = () => {
        if (updateS === 0 && updateM !== 0) {
            updateM--;
            updateS = 60;
        } if (updateS === 0 && updateM === 0) {
            updateM = 0;
            updateS = 0;
            return clearInterval(interv)
        }
        updateS--;
        return setTime({...defaultTime, m: updateM, s: updateS});
    }

    useEffect(() => {
        const newTime = {h: 0, m: Math.trunc(sliderTime / 60), s: sliderTime % 60, ms: 0};
        setTime(newTime)
    }, [sliderTime])

    const startHandler = () => {
        setStarted(true);
        runTime();
        setInterv(window.setInterval( runTime, 1000))
    }

    const pauseHandler = () => {
        setStarted(false);
        clearInterval(interv)
    }

    const resetHandler = () => {
        clearInterval(interv)
        setStarted(false);
        setTime({h: 0, ms: 0, s: 0, m:0})
    }
    
    const minuteChange = (event: React.ChangeEvent<HTMLInputElement>): void => {
        const val: number = Math.max(minMinute, Math.min(maxMinute, Number(event.target.value)));
        setTime({...time, m: val});
    };

    const secondChange = (event: React.ChangeEvent<HTMLInputElement>): void => {
        const val: number = Math.max(minSecond, Math.min(maxSecond, Number(event.target.value)));
        setTime({...time, s: val});
    };

    return (
        <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-between', marginTop: '1rem' }}>
            <Timer time={time} />
            <div style={{ display: 'flex', justifyContent: 'space-between', margin: '1rem' }}>
                <div>
                    <InputLabel>Minutes:</InputLabel>
                    <CoundownInput
                        type="number"
                        disabled={isStarted}
                        min={0}
                        max={720}
                        value={time.m}
                        placeholder='minutes'
                        onChange={minuteChange}
                    />
                </div>
                <div>
                    <InputLabel>Seconds:</InputLabel>
                    <CoundownInput
                        type="number"
                        disabled={isStarted}
                        min={0}
                        max={59}
                        value={time.s}
                        placeholder='seconds'
                        onChange={secondChange}
                    />
                </div>
            </div>
            <Slider
                aria-label='Temperature'
                disabled={isStarted}
                valueLabelDisplay='auto'
                min={0}
                marks
                step={15}
                value={sliderTime}
                onChange={(event: Event, newValue: number | number[]) => setSliderTime(newValue as number)}
                max={3600}
                style={{ margin: '1rem auto' }}
            />
            <div style={{ display: 'flex', margin: '1rem auto'}}>
                <Button variant='contained' onClick={startHandler} style={style} color='success' disabled={isStarted} >
                    Start
                </Button>
                <Button variant='contained' onClick={pauseHandler} style={style} >
                    Pause
                </Button>
                <Button variant='contained' onClick={resetHandler} style={style} color='error' >
                    Reset
                </Button>
            </div>
        </div>
    );
};

export default CountdownControllers;