import React from "react";

export default function AnchorTag(props){
    return (
        <a href={props.href} class={props.class}>{props.text}</a>
    )
}