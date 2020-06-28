import React from "react";
import "./BlockTitle.css";

const BlockTitle = (props) => {
    return (
        <div className="block-title-cls">
            <h2 className="hvr-underline-from-left">{props.title}</h2>
        </div>
    );
}

export default BlockTitle;