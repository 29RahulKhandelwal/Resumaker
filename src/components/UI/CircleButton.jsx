import React from "react";

export default function CircleButton(props){
    return (
        <div className="text-center circle-button">
            <button type={props.type} className={props.class} onClick={props.onClick}>{props.text}</button>
        </div>
    )

}