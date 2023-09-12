import {Button} from "@mui/material";
import {TimerFooter} from "../assets/styles/app.styles";
import {memo} from "react";

type TimerControllersProto = {
    start: () => void,
    pause: () => void,
    reset: () => void,
    status: number,
}

const TimerControllers = ({start, pause, reset, status}: TimerControllersProto) => {
    return (
        <TimerFooter>
            {status === 1 ? (
                <Button variant='contained' color="secondary" onClick={pause}>
                    Pause
                </Button>
            ) : (
                <Button variant='contained' onClick={start}>
                    {status === 2 ? 'Restart' : 'Start'}
                </Button>
            )}
            <Button variant='contained' color="error" onClick={reset}>
                Reset
            </Button>
        </TimerFooter>
    );
};

export default memo(TimerControllers);