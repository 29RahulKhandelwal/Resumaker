import React, { Fragment } from "react";
import Heading from "../UI/Heading";
import SkillsForm from "./SkillsForm";

export default function Skills(props){
    return (
        <Fragment>
            <Heading text="YOUR SKILLS" />
            <SkillsForm skills={props.skills} />
        </Fragment>
    )
}