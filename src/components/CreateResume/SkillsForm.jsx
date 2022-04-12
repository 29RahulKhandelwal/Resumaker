import React, { Fragment } from "react";
import Button from "../UI/Button";
import CircleButton from "../UI/CircleButton";
import Input from "../UI/Input";
import ShortInput from "../UI/ShortInput";


export default function SkillsForm(){
    return (
        <Fragment>
            <Input label="SectionHeading" id="SectionHeading" text="Section Heading" type="text" placeholder="Skills" />
            <Input label="SkillName" id="SkillName" text="Skill Name" type="text" placeholder="Programming language, Frameworks, etc" />
            <ShortInput label="SkillDetails" id="SkillDetails" text="Skill Details" type="text" placeholder="Javascript" />
            <div className="circle">
                <CircleButton type="button" class="btn btn-outline-primary btn-md btn-circle" text="+"  />
                <CircleButton type="button" class="btn btn-outline-primary btn-md btn-circle" text="-"  />
            </div>
            <div className="addremove">
                <Button type="button" class="btn btn-outline-primary btn-md btn-school" text="Add Skill" />
                <Button type="button" class="btn btn-outline-primary btn-md btn-school" text="Remove Skill" />
            </div>
        </Fragment>
    )
}