import React, {useCallback, useEffect, useState} from 'react';
import {Button, InputLabel, LinearProgress, Slider} from "@mui/material";
import {CoundownInput} from "../assets/styles/app.styles";
import {maxMinute, minMinute, maxSecond, minSecond} from "../constants/constants";

interface IDefaultTime {
    h: number,
    m: number,
    s: number,
    ms: number,
}

const CountdownControllers = () => {
    // const progress = 0;
    // const defaultTime = 0;
    // const [sliderTime, setSliderTime] = useState(0)
    // const [isStarted, setStarted] = useState(false);
    // const [time, setTime] = useState(defaultTime);
    // const starterHandler = () => {
    //     setStarted(prevState => !prevState)
    // }
    //
    // useEffect(() => {
    //
    // }, [sliderTime])
    //
    // const minuteChange = (event: React.ChangeEvent<HTMLInputElement>): void => {
    //     const val: number = Math.max(minMinute, Math.min(maxMinute, Number(event.target.value)));
    //     setTime({...time, m: val});
    // };
    //
    // const secondChange = (event: React.ChangeEvent<HTMLInputElement>): void => {
    //     const val: number = Math.max(minSecond, Math.min(maxSecond, Number(event.target.value)));
    //     setTime({...time, s: val});
    // };

    return (
        <>
            <h1>countdown 2</h1>
            {/*<div style={{ margin: '10px auto' }}>*/}
            {/*    <h5>{progress}%</h5>*/}
            {/*    <LinearProgress value={progress} valueBuffer={100} variant='buffer' />*/}
            {/*</div>*/}
            {/*<div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-between', marginTop: '1rem' }}>*/}
            {/*    <div style={{ display: 'flex', justifyContent: 'space-between', margin: '1rem' }}>*/}
            {/*        <div>*/}
            {/*            <InputLabel>Minutes:</InputLabel>*/}
            {/*            <CoundownInput*/}
            {/*                type='number'*/}
            {/*                min={0}*/}
            {/*                max={720}*/}
            {/*                value={time.m}*/}
            {/*                placeholder='minutes'*/}
            {/*                onChange={minuteChange}*/}
            {/*            />*/}
            {/*        </div>*/}
            {/*        <div>*/}
            {/*            <InputLabel>Seconds:</InputLabel>*/}
            {/*            <CoundownInput*/}
            {/*                type='number'*/}
            {/*                min={0}*/}
            {/*                max={59}*/}
            {/*                value={time.s}*/}
            {/*                placeholder='seconds'*/}
            {/*                onChange={secondChange}*/}
            {/*            />*/}
            {/*        </div>*/}
            {/*    </div>*/}
            {/*    <Slider*/}
            {/*        aria-label='Temperature'*/}
            {/*        valueLabelDisplay='auto'*/}
            {/*        min={0}*/}
            {/*        marks*/}
            {/*        step={15}*/}
            {/*        value={sliderTime}*/}
            {/*        onChange={(event: Event, newValue: number | number[]) => setSliderTime(newValue as number)}*/}
            {/*        max={3600}*/}
            {/*        style={{ margin: '1rem auto' }}*/}
            {/*    />*/}
            {/*    <div style={{ display: 'flex', margin: '1rem auto', justifyContent: "space-between" }}>*/}
            {/*        <Button variant='contained' color='success' onClick={starterHandler} style={{ width: '50%', margin: "0 10px" }}>*/}
            {/*            {isStarted ? "Pause" : "Start"}*/}
            {/*        </Button>*/}
            {/*        <Button variant='contained' color='error' style={{ width: '50%', margin: "0 10px"}}>*/}
            {/*            Reset*/}
            {/*        </Button>*/}
            {/*    </div>*/}
            {/*</div>*/}
        </>
    );
};

export default CountdownControllers;