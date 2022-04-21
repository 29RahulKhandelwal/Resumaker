import React from "react";

export default function ShortInput(props) {
    return (
        <div className="mb-3 input-style short-input">
            <label htmlFor={props.label} className="form-label">{props.text}</label>
            <input type={props.type} className="form-control" name={props.name} id={props.id} placeholder={props.placeholder} onChange={props.onChange} value={props.value} />
        </div>
    )
}