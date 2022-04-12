import React, { Fragment } from "react";
import Heading from "../UI/Heading";
import ProjectForm from "./ProjectForm";

export default function Project(){
    return (
        <Fragment>
            <Heading text="YOUR PROJECTS" />
            <ProjectForm />
        </Fragment>
    )
}