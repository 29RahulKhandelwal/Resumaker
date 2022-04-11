import React from "react";

export default function Button(props){
    return (
        <div className="text-center">
            <button type={props.type} class={props.class}>{props.text}</button>
        </div>
    )
}