import React, {FC, memo} from 'react';
import CLabel from "./UI/CLabel";
import {BasicWrap, CountdownInput} from "../assets/styles/app.styles";
import {ICountdownInputs} from "../models/ICountdown";

const CountdownInputs: FC<ICountdownInputs> = ({isStarted, minutes, seconds, minuteChange,secondChange}) => {
    return (
        <BasicWrap>
            <div>
                <CLabel text='Minutes' />
                <CountdownInput
                    id='minutes'
                    type='number'
                    disabled={isStarted}
                    min={0}
                    max={720}
                    value={minutes}
                    placeholder='minutes'
                    onChange={minuteChange}
                />
            </div>
            <div>
                <CLabel text='Seconds' />
                <CountdownInput
                    id='seconds'
                    type='number'
                    disabled={isStarted}
                    min={0}
                    max={59}
                    value={seconds}
                    placeholder='seconds'
                    onChange={secondChange}
                />
            </div>
        </BasicWrap>
    );
};

export default memo(CountdownInputs);