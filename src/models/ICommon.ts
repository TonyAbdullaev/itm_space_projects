export interface ITimer {
    time: number,
}

export type TimerControllersProto = {
    interv: number,
    start: () => void,
    pause: () => void,
    reset: () => void,
}