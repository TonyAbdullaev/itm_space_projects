import {CountdownInputLabel} from "../../assets/styles/app.styles";
import React, {memo} from "react";

interface CLabelProps {
    text: string
}
const CLabel = ({ text }: CLabelProps) => {
    return <CountdownInputLabel>{ text }:</CountdownInputLabel>;
};

export default memo(CLabel);