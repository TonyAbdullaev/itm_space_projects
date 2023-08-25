import React, {useEffect, useState} from 'react';
import Timer from "../components/Timer";
import {Button, Container, InputLabel, LinearProgress, Slider} from "@mui/material";
import {maxMinute, maxSecond, minMinute, minSecond} from "../constants/constants";
import {CoundownInput} from "../assets/styles/app.styles";

interface IDefaultTime {
    h: number,
    m: number,
    s: number,
    ms: number,
}

const timeParser = (time: IDefaultTime) => {
    return time.h * 3600 + time.m * 60 + time.s + time.ms / 60;
}


const P = () => {
    const [initialTime, setInitialTime] = useState(0);
    const defaultTime: IDefaultTime = {h: 0, m: 0, s: 0, ms: 0}
    const [sliderTime, setSliderTime] = useState(0)
    const [isStarted, setStarted] = useState(false);
    const [time, setTime] = useState(defaultTime);
    const starterHandler = () => {
        setStarted(prevState => !prevState)
        setInitialTime(timeParser(time));
    }

    useEffect(() => {
        const newTime = {h: 0, m: Math.trunc(sliderTime / 60), s: sliderTime % 60, ms: 0};
        setTime(newTime)
    }, [sliderTime])

    const minuteChange = (event: React.ChangeEvent<HTMLInputElement>): void => {
        const val: number = Math.max(minMinute, Math.min(maxMinute, Number(event.target.value)));
        setTime({...time, m: val});
    };

    const secondChange = (event: React.ChangeEvent<HTMLInputElement>): void => {
        const val: number = Math.max(minSecond, Math.min(maxSecond, Number(event.target.value)));
        setTime({...time, s: val});
    };

    const progress = initialTime % (initialTime / 50);


    return (
        <Container maxWidth="sm" style={{marginTop: "5rem"}}>
            <div style={{margin: "10px auto"}}>
                <h5>{progress}%</h5>
                <LinearProgress value={progress} valueBuffer={100} variant="buffer" />
            </div>
            <Timer time={defaultTime} />
            <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-between', marginTop: '1rem' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', margin: '1rem' }}>
                    <div>
                        <InputLabel>Minutes:</InputLabel>
                        <CoundownInput
                            type="number"
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
                    valueLabelDisplay='auto'
                    min={0}
                    marks
                    step={15}
                    value={sliderTime}
                    onChange={(event: Event, newValue: number | number[]) => setSliderTime(newValue as number)}
                    max={3600}
                    style={{ margin: '1rem auto' }}
                />
                <div style={{ display: 'flex', margin: '1rem auto' }}>
                    {isStarted ? (
                        <Button variant='contained' onClick={() => setStarted(prevState => !prevState)} style={{ width: '50%' }}>
                            Pause
                        </Button>
                    ) : (
                        <Button variant='contained' color='success' onClick={starterHandler} style={{ width: '50%' }}>
                            Start
                        </Button>
                    )}
                    <Button variant='contained' color='error' style={{ width: '50%' }}>
                        Reset
                    </Button>
                </div>
            </div>
        </Container>
    );
};

export default P;