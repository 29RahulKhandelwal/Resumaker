import React, { Fragment } from "react";
import Button from "../UI/Button";
import CircleButton from "../UI/CircleButton";
import Input from "../UI/Input";
import ShortInput from "../UI/ShortInput";


export default function WorkForm(){
    return (
        <Fragment>
            <Input label="SectionHeading" id="SectionHeading" text="Section Heading" type="text" placeholder="Education" />
            <Input label="CompanyName" id="CompanyName" text="Company Name" type="text" placeholder="MICROSOFT" />
            <Input label="JobTitle" id="JobTitle" text="JobTitle" type="text" placeholder="Software Engineer" />
            <Input label="JobLocation" id="JobLocation" text="Job Location" type="text" placeholder="Stanford, CA" />
            <Input label="StartDate" id="StartDate" text="Start Date" type="text" placeholder="Sep 2018" />
            <Input label="EndDate" id="End Date" text="EndDate" type="text" placeholder="Jun 2022" />
            <ShortInput label="JobResponsibilty" id="JobResponsibilty" text="Job Responsibilty" type="text" placeholder="Did cool stuff at company" />
            <div className="circle">
                <CircleButton type="button" class="btn btn-center btn-outline-primary btn-md btn-circle" text="+"  />
                <CircleButton type="button" class="btn btn-center btn-outline-primary btn-md btn-circle" text="-"  />
            </div>
            <div className="addremove">
                <Button type="button" class="btn btn-center btn-outline-primary btn-md btn-school" text="Add School" />
                <Button type="button" class="btn btn-center btn-outline-primary btn-md btn-school" text="Remove School" />
            </div>
        </Fragment>
    )
}