import {Button} from "@mui/material";
import {style} from "../constants/constants";
import {memo} from "react";


interface CountdownControllersParams {
    isStarted: boolean,
    start: () => void,
    pause: () => void,
    reset: () => void,
}

const CountdownControllers = ({start, pause, reset, isStarted}: CountdownControllersParams) => {

    return (
        <div style={{ display: 'flex', margin: '1rem auto'}}>
            <Button variant='contained' onClick={start} style={style} color='success' disabled={isStarted} >
                Start
            </Button>
            <Button variant='contained' onClick={pause} style={style} >
                Pause
            </Button>
            <Button variant='contained' onClick={reset} style={style} color='error' >
                Reset
            </Button>
        </div>
    );
};

export default memo(CountdownControllers);