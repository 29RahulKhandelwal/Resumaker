import React, { Fragment } from "react";
import AnchorTag from "../UI/AnchorTag";
import { Link } from "react-router-dom";
import Button from "../UI/Button";

export default function SideLinks(){
    return (
        <Fragment>
            <Link to="/resume-generator/templates">
                <AnchorTag class="link-info side-links" text="Templates" />
            </Link>
            <Link to="/resume-generator/profile">
            <AnchorTag class="link-info side-links" text="Profile" />
            </Link>
            <Link to="/resume-generator/education">
            <AnchorTag class="link-info side-links" text="Education" />
            </Link>
            <Link to="/resume-generator/work">
            <AnchorTag class="link-info side-links" text="Work" />
            </Link>
            <Link to="/resume-generator/skills">
            <AnchorTag class="link-info side-links" text="Skills" />
            </Link>
            <Link to="/resume-generator/projects">
            <AnchorTag class="link-info side-links" text="Projects" />
            </Link>
            {/* <Link to="/resume-generator/awards">
            <AnchorTag class="link-info side-links" text="Awards" />
            </Link> */}
            <Button type="button" class="btn btn-outline-primary btn-md create-button" text="MAKE" />
        </Fragment>
    )
}