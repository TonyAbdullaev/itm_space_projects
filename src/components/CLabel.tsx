import {CoundownInputLabel} from "../assets/styles/app.styles";
import React, {memo} from "react";

interface CLabelProps {
    text: string
}
const CLabel = ({ text }: CLabelProps) => {
    return <CoundownInputLabel>{ text }:</CoundownInputLabel>;
};

export default memo(CLabel);