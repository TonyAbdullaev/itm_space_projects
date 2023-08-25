import React from 'react';
import CountdownControllers from "../components/CountdownControllers";
import Timer from "../components/Timer";
import {Container} from "@mui/material";
import Progress from "../components/Progress";

const CountdownPage = () => {
    const defaultTime = {ms: 0, s: 0, m:0, h: 0}

    return (
        <Container maxWidth="sm" style={{marginTop: "5rem"}}>
            <Progress />
            <Timer time={defaultTime} />
            <CountdownControllers />
        </Container>
    );
};

export default CountdownPage;