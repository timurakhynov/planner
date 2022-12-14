import React from "react";
import './RemoveButton.css';

const RemoveButton = ({remove}) => {
    return (
        <button className="RemoveButton" onClick={remove}>
            X
        </button>
    )
}

export default RemoveButton