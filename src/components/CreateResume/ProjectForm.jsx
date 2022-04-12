import React, { Fragment } from "react";
import Button from "../UI/Button";
import CircleButton from "../UI/CircleButton";
import Input from "../UI/Input";
import ShortInput from "../UI/ShortInput";


export default function ProjectForm(){
    return (
        <Fragment>
            <Input label="SectionHeading" id="SectionHeading" text="Section Heading" type="text" placeholder="Projects" />
            <Input label="ProjectName" id="ProjectName" text="Project Name" type="text" placeholder="Resumaker" />
            <Input label="ProjectDescription" id="ProjectDescription" text="Project Description" type="text" placeholder="Resumaker is a online application for creating resume just by entering your details." />
            <Input label="LinkToProject" id="LinkToProject" text="Link To Project" type="email" placeholder="http://resumaker.com" />
            <ShortInput label="LanguagesUsed" id="LanguagesUsed" text="Languages Used" type="text" placeholder="Javascript" />
            <div className="circle">
                <CircleButton type="button" class="btn btn-center btn-outline-primary btn-md btn-circle" text="+"  />
                <CircleButton type="button" class="btn btn-center btn-outline-primary btn-md btn-circle" text="-"  />
            </div>
            <div className="addremove">
                <Button type="button" class="btn btn-center btn-outline-primary btn-md btn-school" text="Add Skill" />
                <Button type="button" class="btn btn-center btn-outline-primary btn-md btn-school" text="Remove Skill" />
            </div>
        </Fragment>
    )
}