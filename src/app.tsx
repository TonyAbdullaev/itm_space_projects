import React from 'react';
import TimerPage from "./pages/TimerPage";
import {MainLayout} from "./assets/styles/app.styles";
import CountdownPage from "./pages/CountdownPage";
import CTitle from "./components/UI/CTitle";
// import TimerUi from "./components/Timer/TimerUI";


function App() {
    return (
        <MainLayout>
            <CTitle title="Timer" />
            <TimerPage />
            <CTitle title="Countdown" />
            <CountdownPage />
            {/*<TimerUi />*/}
        </MainLayout>
    );
}

export default App;
