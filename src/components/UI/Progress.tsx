import {LinearProgress} from "@mui/material";
import useCountdown from "../../hooks/useCountdown";
import {FC, memo} from "react";
import {IProgressParams} from "../../models/ICountdown";



const Progress: FC<IProgressParams> = ({time, fullTime}) => {
    const {getPercentage} = useCountdown();
    return (
        <div style={{ margin: '10px 0' }}>
            <LinearProgress style={{ width: '550px' }} value={100 - getPercentage({ time, fullTime })} valueBuffer={100} variant='buffer' />
        </div>
    );
};

export default memo(Progress);