import {Button, Divider, Stack} from "@mui/material";
import {TimerFooter} from "../assets/styles/app.styles";
import {FC, memo} from "react";
import {TimerControllersProto} from "../models/ICommon";



const TimerControllers: FC<TimerControllersProto> = ({interv, start, pause, reset}) => {
    return (
        <TimerFooter>
            <Stack
                direction="row"
                divider={<Divider orientation="vertical" flexItem />}
                spacing={2}
            >
                {
                    interv !== 0 ?
                         <Button variant='contained' color="secondary" onClick={pause}>
                             Pause
                         </Button>
                         :
                         <Button variant='contained' onClick={start}>
                             Start
                         </Button>
                }
                <Button variant='contained' color="error" onClick={reset}>
                    Reset
                </Button>
            </Stack>
        </TimerFooter>
    );
};

export default memo(TimerControllers);