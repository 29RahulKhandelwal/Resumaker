import React from "react";

export default function ShortInput(props) {
    return (
        <div className="mb-3 input-style short-input">
            <label for={props.label} className="form-label">{props.text}</label>
            <input type={props.type} className="form-control" id={props.id} placeholder={props.placeholder} />
        </div>
    )
}