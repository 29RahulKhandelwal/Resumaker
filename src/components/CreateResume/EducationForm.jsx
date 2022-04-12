import React, { Fragment } from "react";
import Button from "../UI/Button";
import Input from "../UI/Input";


export default function EducationForm(){
    return (
        <Fragment>
            <Input label="SectionHeading" id="SectionHeading" text="Section Heading" type="text" placeholder="Education" />
            <Input label="SchoolName" id="SchoolName" text="School Name" type="text" placeholder="Stanford University" />
            <Input label="SchoolLocation" id="SchoolLocation" text="School Location" type="text" placeholder="Stanford, CA" />
            <Input label="Percentage" id="Percentage" text="Percentage" type="number" placeholder="85" />
            <Input label="Major" id="Major" text="Major" type="text" placeholder="Computer Science" />
            <Input label="CGPA" id="CGPA" text="CGPA" type="number" placeholder="8.1" />
            <Input label="StartDate" id="StartDate" text="Start Date" type="text" placeholder="Sep 2018" />
            <Input label="EndDate" id="End Date" text="EndDate" type="text" placeholder="Jun 2022" />
            <Button type="button" class="btn btn-center btn-outline-primary btn-md btn-school" text="Add School" />
            <Button type="button" class="btn btn-center btn-outline-primary btn-md btn-school" text="Remove School" />
        </Fragment>
    )
}