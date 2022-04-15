import React, { Fragment, useState } from "react";
import Button from "../UI/Button";
import Input from "../UI/Input";


export default function EducationForm(){
    const [educationData,setEducationData]=useState({
        educationSectionHeading:"",
        schoolName:"",
        schoolLocation:"",
        percentage:"",
        major:"",
        cgpa:"",
        educationStartDate:"",
        educationEndDate:""
    });
    function handleChange(event){
        const {name,value}=event.target;
        setEducationData(prevData=>{
            return {
                ...prevData,
                [name]:value
            }
        })
    }

    console.log(educationData)

    return (
        <Fragment>
            <Input label="educationSectionHeading" id="educationSectionHeading" text="Section Heading" type="text" name="educationSectionHeading" value={educationData.educationSectionHeading} onChange={handleChange} placeholder="Education" />
            <Input label="SchoolName" id="SchoolName" text="School Name" type="text" name="schoolName" value={educationData.schoolName} onChange={handleChange} placeholder="Stanford University" />
            <Input label="SchoolLocation" id="SchoolLocation" text="School Location" type="text" name="schoolLocation" value={educationData.schoolLocation} onChange={handleChange} placeholder="Stanford, CA" />
            <Input label="Percentage" id="Percentage" text="Percentage" type="number" name="percentage" value={educationData.percentage} onChange={handleChange} placeholder="85" />
            <Input label="Major" id="Major" text="Major" type="text" name="major" value={educationData.major} onChange={handleChange} placeholder="Computer Science" />
            <Input label="CGPA" id="CGPA" text="CGPA" type="number" name="cgpa" value={educationData.cgpa} onChange={handleChange} placeholder="8.1" />
            <Input label="educationStartDate" id="educationStartDate" text="Start Date" type="text" name="startDate" value={educationData.educationStartDate} onChange={handleChange} placeholder="Sep 2018" />
            <Input label="educationEndDate" id="educationEnd Date" text="EndDate" type="text" name="endDate" value={educationData.educationEndDate} onChange={handleChange} placeholder="Jun 2022" />
            <div className="addremove">
                <Button type="button" class="btn btn-outline-primary btn-md btn-school" text="Add School" />
                <Button type="button" class="btn btn-outline-primary btn-md btn-school" text="Remove School" />
            </div>
        </Fragment>
    )
}