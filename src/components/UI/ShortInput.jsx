import React from "react";

export default function ShortInput(props) {
    return (
        <div class="mb-3 input-style short-input">
            <label for={props.label} class="form-label">{props.text}</label>
            <input type={props.type} class="form-control" id={props.id} placeholder={props.placeholder} />
        </div>
    )
}