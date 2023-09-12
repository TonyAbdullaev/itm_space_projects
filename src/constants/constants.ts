// time parse
export const maxMinute: number = 720;
export const maxSecond: number = 59;
export const minMinute: number = 0;
export const minSecond: number = 0;

// style
export const style = { width: '50%', margin: "0 5px" };

// default time
export interface IDefaultTime {
    h: number,
    m: number,
    s: number,
    ms: number,
}
export const defaultTime: IDefaultTime = {ms: 0, s: 0, m:0, h: 0}
