import React from 'react';
import {LinearProgress} from "@mui/material";

interface params {
    progress: number;
}

const Progress = (progress: number) => {
    return (
        <div style={{ margin: '10px auto' }}>
            <h5>{progress}%</h5>
            <LinearProgress value={progress} valueBuffer={100} variant='buffer' />
        </div>
    );
};

export default Progress;