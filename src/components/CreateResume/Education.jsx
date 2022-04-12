import React, { Fragment } from "react";
import Heading from "../UI/Heading";
import EducationForm from "./EducationForm";

export default function Education(){
    return (
        <Fragment>
            <Heading text="YOUR EDUCATION BACKGROUND" />
            <EducationForm />
        </Fragment>
    )
}