import React, {useEffect, useState} from 'react';
import CountdownControllers from "../components/CountdownControllers";
import {Button, Container, InputLabel, Slider} from "@mui/material";
import Progress from "../components/Progress";
import Timer from "../components/Timer";
import {CoundownInput, CoundownInputLabel} from "../assets/styles/app.styles";
import {defaultTime, maxMinute, maxSecond, minMinute, minSecond, style} from "../constants/constants";
import CountdownTimer from "../components/CoundownTimer";
import CLabel from "../components/CLabel";
import CSlider from "../components/CSlider";

const CountdownPage = () => {
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
        <Container maxWidth="sm" style={{marginTop: "1rem"}}>
            <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-between', marginTop: '1rem' }}>
                <CountdownTimer time={time} />
                <div style={{ display: 'flex', justifyContent: 'space-between', margin: '1rem' }}>
                    <div>
                        <CLabel text="Minutes" />
                        <CoundownInput
                            id="minutes"
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
                        <CLabel text="Seconds" />
                        <CoundownInput
                            id="seconds"
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
                <CSlider isStarted={isStarted} sliderTime={sliderTime} setSliderTime={setSliderTime} />
                <CountdownControllers start={startHandler} pause={pauseHandler} reset={resetHandler} isStarted={isStarted}  />
            </div>
        </Container>
    );
};

export default CountdownPage;