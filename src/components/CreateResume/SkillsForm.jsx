import React, { Fragment, useState } from "react";
import Button from "../UI/Button";
import CircleButton from "../UI/CircleButton";
import Input from "../UI/Input";
import ShortInput from "../UI/ShortInput";


export default function SkillsForm(){
    const [skillsData,setSkillsData]=useState({
        skillSectionHeading:"",
        skillName:"",
        skillDetails:""
    });
    function handleChange(event){
        const {name,value}=event.target;
        setSkillsData(prevData=>{
            return {
                ...prevData,
                [name]:value
            }
        })
    }

    console.log(skillsData);

    return (
        <Fragment>
            <Input label="skillSectionHeading" id="skillSectionHeading" text="Section Heading" type="text" name="sectionHeading" value={skillsData.skillSectionHeading} onChange={handleChange} placeholder="Skills" />
            <Input label="SkillName" id="SkillName" text="Skill Name" type="text" name="skillName" value={skillsData.skillName} onChange={handleChange} placeholder="Programming language, Frameworks, etc" />
            <ShortInput label="SkillDetails" id="SkillDetails" text="Skill Details" type="text" name="skillDetails" value={skillsData.skillDetails} onChange={handleChange} placeholder="Javascript" />
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