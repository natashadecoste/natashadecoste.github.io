import React from "react"
import "./../styles/_label.scss"

const Label = (props) => (
    <div className={`label ${props.styleName}`}>
        {props.img && <img src={props.img}></img>}
        <div className="label-text">{props.name}</div>
    </div>
);

export default Label;

// style={{ backgroundColor: props.color }}