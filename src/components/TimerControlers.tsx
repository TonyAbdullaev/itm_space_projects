import React from 'react';
import {Button} from "@mui/material";

type TimerControllersProto = {
    start: any,
    pause: any,
    reset: any,
    status: number,
}

const TimerControllers = ({start, pause, reset, status}: TimerControllersProto) => {
    return (
        <footer style={{ maxWidth: "300px", display: 'flex', justifyContent: 'space-around' }}>
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
        </footer>
    );
};

export default TimerControllers;