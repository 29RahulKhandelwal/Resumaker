import React, { Fragment } from "react";
import Heading from "../UI/Heading";
import SkillsForm from "./WorkForm";

export default function Skills(){
    return (
        <Fragment>
            <Heading text="YOUR SKILLS" />
            <SkillsForm />
        </Fragment>
    )
}