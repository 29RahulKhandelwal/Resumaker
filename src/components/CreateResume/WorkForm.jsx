import React, { Fragment, useState } from "react";
import Button from "../UI/Button";
import CircleButton from "../UI/CircleButton";
import Input from "../UI/Input";
import ShortInput from "../UI/ShortInput";


export default function WorkForm(){
    const [workData,setWorkData]=useState({
        workSectionHeading:"",
        companyName:"",
        jobTitle:"",
        jobLocation:"",
        startDate:"",
        endDate:"",
        jobResponsibility:""
    });
    function handleChange(event){
        const {name,value}=event.target;
        setWorkData(prevData=>{
            return {
                ...prevData,
                [name]:value
            }
        })
    }

    console.log(workData);

    return (
        <Fragment>
            <Input label="workSectionHeading" id="workSectionHeading" text="Section Heading" type="text" name="sectionHeading" value={workData.workSectionHeading} onChange={handleChange} placeholder="Education" />
            <Input label="CompanyName" id="CompanyName" text="Company Name" type="text" name="companyName" value={workData.companyName} onChange={handleChange} placeholder="MICROSOFT" />
            <Input label="JobTitle" id="JobTitle" text="JobTitle" type="text" name="jobTitle" value={workData.jobTitle} onChange={handleChange} placeholder="Software Engineer" />
            <Input label="JobLocation" id="JobLocation" text="Job Location" type="text" name="jobLocation" value={workData.jobLocation} onChange={handleChange} placeholder="Stanford, CA" />
            <Input label="StartDate" id="StartDate" text="Start Date" type="text" name="startDate" value={workData.startDate} onChange={handleChange} placeholder="Sep 2018" />
            <Input label="EndDate" id="End Date" text="EndDate" type="text" name="endDate" value={workData.endDate} onChange={handleChange} placeholder="Jun 2022" />
            <ShortInput label="JobResponsibilty" id="JobResponsibilty" text="Job Responsibilty" type="text" name="jobResponsibility" value={workData.jobResponsibility} onChange={handleChange} placeholder="Did cool stuff at company" />
            <div className="circle">
                <CircleButton type="button" class="btn btn-outline-primary btn-md btn-circle" text="+"  />
                <CircleButton type="button" class="btn btn-outline-primary btn-md btn-circle" text="-"  />
            </div>
            <div className="addremove">
                <Button type="button" class="btn btn-outline-primary btn-md btn-school" text="Add Job" />
                <Button type="button" class="btn btn-outline-primary btn-md btn-school" text="Remove Job" />
            </div>
        </Fragment>
    )
}