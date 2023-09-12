import React, {useState} from 'react';
import {Slider} from "@mui/material";

interface CSliderProps {
    isStarted: boolean,
    sliderTime: number,
    setSliderTime:  React.Dispatch<React.SetStateAction<number>>,
}

const CSlider = ({isStarted, sliderTime, setSliderTime}: CSliderProps) => {

    return (
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
    );
};

export default CSlider;