import React, { Fragment } from "react";
import Heading from "../UI/Heading";
import WorkForm from "./WorkForm";

export default function Work(){
    return (
        <Fragment>
            <Heading text="YOUR WORK EXPERIENCE" />
            <WorkForm />
        </Fragment>
    )
}