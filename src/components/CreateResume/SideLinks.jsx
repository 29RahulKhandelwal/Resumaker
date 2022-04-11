import React, { Fragment } from "react";
import AnchorTag from "../UI/AnchorTag";

export default function SideLinks(){
    return (
        <Fragment>
            <AnchorTag class="link-info side-links" text="Templates" />
            <AnchorTag class="link-info side-links" text="Profile" />
            <AnchorTag class="link-info side-links" text="Education" />
            <AnchorTag class="link-info side-links" text="Work" />
            <AnchorTag class="link-info side-links" text="Skills" />
            <AnchorTag class="link-info side-links" text="Projects" />
            <AnchorTag class="link-info side-links" text="Awards" />
        </Fragment>
    )
}