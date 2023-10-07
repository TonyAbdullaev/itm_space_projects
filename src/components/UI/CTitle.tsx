import React, {memo} from 'react';
import {Title1} from "../../assets/styles/app.styles";

interface ICTitle {
    title: string
}

const CTitle = ({title}: ICTitle) => {
    return <Title1>{title}</Title1>
};

export default memo(CTitle);