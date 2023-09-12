import React from 'react';
import TimerPage from "./pages/TimerPage";
import {MainLayout} from "./assets/styles/app.styles";
import CountdownPage from "./pages/CountdownPage";
import TimerTitle from "./components/TimerTitle";

function App() {
    return (
        <MainLayout>
            <TimerTitle title="Timer" />
            <TimerPage />
            <TimerTitle title="Countdown" />
            <CountdownPage />
        </MainLayout>
    );
}

export default App;
