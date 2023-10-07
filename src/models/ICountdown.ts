export interface CountdownTimerParams {
    minutes: number,
    seconds: number,
}

export interface IGetPercentage {
    fullTime: number,
    time: number,
}

export interface IProgressParams {
    time: number,
    fullTime: number,
}

export interface ICountdownInputs {
    isStarted: boolean,
    minutes: number,
    seconds: number,
    minuteChange: (event: React.ChangeEvent<HTMLInputElement>) => void,
    secondChange: (event: React.ChangeEvent<HTMLInputElement>) => void,
}

export interface CSliderProps {
    isStarted: boolean,
    sliderTime: number,
    setSliderTime:  React.Dispatch<React.SetStateAction<number>>,
    onSliderChange: (num: number) => void,
}