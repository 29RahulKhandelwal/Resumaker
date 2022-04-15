import React from "react";

export default function Input(props) {
    return (
        <div className="mb-3 input-style">
            <label htmlFor={props.label} className="form-label">{props.text}</label>
            <input type={props.type} className="form-control" id={props.id} name={props.name} value={props.value} onChange={props.onChange} placeholder={props.placeholder} />
        </div>
    )
}