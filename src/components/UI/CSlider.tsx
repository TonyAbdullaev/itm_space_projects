import React, {FC} from 'react';
import {Slider} from "@mui/material";
import {CSliderProps} from "../../models/ICountdown";

const CSlider: FC<CSliderProps> = ({isStarted, sliderTime, onSliderChange}) => {

    return (
        <Slider
            aria-label='Temperature'
            disabled={isStarted}
            valueLabelDisplay='auto'
            min={0}
            marks
            step={15}
            value={sliderTime}
            onChange={(event: Event, newValue: number | number[]) => onSliderChange(newValue as number)}
            max={3600}
            style={{ margin: '10px', width: "100%" }}
        />
    );
};

export default CSlider;