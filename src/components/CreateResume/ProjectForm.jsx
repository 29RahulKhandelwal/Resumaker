import React, { Fragment, useState } from "react";
import Button from "../UI/Button";
import CircleButton from "../UI/CircleButton";
import Input from "../UI/Input";
import ShortInput from "../UI/ShortInput";


export default function ProjectForm(){
    const [projectData,setProjectData]=useState({
        sectionHeading:"",
        projectName:"",
        projectDescription:"",
        projectLink:"",
        projectLanguages:""
    });
    function handleChange(event){
        const {name,value}=event.target;
        setProjectData(prevData=>{
            return {
                ...prevData,
                [name]:value
            }
        })
    }

    console.log(projectData)

    return (
        <Fragment>
            <Input label="SectionHeading" id="SectionHeading" text="Section Heading" type="text" name="sectionHeading" value={projectData.sectionHeading} onChange={handleChange} placeholder="Projects" />
            <Input label="ProjectName" id="ProjectName" text="Project Name" type="text" name="projectName" value={projectData.projectName} onChange={handleChange} placeholder="Resumaker" />
            <Input label="ProjectDescription" id="ProjectDescription" text="Project Description" type="text" name="projectDescription" value={projectData.projectDescription} onChange={handleChange} placeholder="Resumaker is a online application for creating resume just by entering your details." />
            <Input label="LinkToProject" id="LinkToProject" text="Link To Project" type="url" name="projectLink" value={projectData.projectLink} onChange={handleChange} placeholder="http://resumaker.com" />
            <ShortInput label="LanguagesUsed" id="LanguagesUsed" text="Languages Used" type="text" name="projectLanguages" value={projectData.projectLanguages} onChange={handleChange} placeholder="Javascript" />
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