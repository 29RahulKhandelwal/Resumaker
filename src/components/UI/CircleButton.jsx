import React from "react";

export default function CircleButton(props){
    return (
        <div className="text-center circle-button">
            <button type={props.type} className={props.class}>{props.text}</button>
        </div>
    )

}