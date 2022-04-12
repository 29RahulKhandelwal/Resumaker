import React, { Fragment } from "react";
import Button from "../UI/Button";
import CircleButton from "../UI/CircleButton";
import Input from "../UI/Input";
import ShortInput from "../UI/ShortInput";


export default function HonorAwardsForm(){
    return (
        <Fragment>
            <Input label="SectionHeading" id="SectionHeading" text="Section Heading" type="text" placeholder="Awards" />
            <Input label="AwardName" id="AwardName" text="Award Name" type="text" placeholder="Professional Developer" />
            <Input label="AwardDate" id="AwardDate" text="Award Date" type="text" placeholder="Feb 2020" />
            <Input label="Awarder" id="Awarder" text="Awarder" type="text" placeholder="DevTeam" />
            <Input label="Summary" id="Summary" text="Summary" type="text" placeholder="Created Best Application for that case." />
            <div className="addremove">
                <Button type="button" class="btn btn-outline-primary btn-md btn-school" text="Add Skill" />
                <Button type="button" class="btn btn-outline-primary btn-md btn-school" text="Remove Skill" />
            </div>
        </Fragment>
    )
}