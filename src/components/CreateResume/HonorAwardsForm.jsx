import React, { Fragment, useState } from "react";
import Button from "../UI/Button";
import Input from "../UI/Input";


export default function HonorAwardsForm(){
    const [awardsData,setAwardsData]=useState({
        sectionHeading:"",
        awardName:"",
        awardDate:"",
        awarder:"",
        summary:""
    });
    function handleChange(event){
        const {name,value}=event.target;
        setAwardsData(prevData=>{
            return {
                ...prevData,
                [name]:value
            }
        })
    }

    console.log(awardsData)

    return (
        <Fragment>
            <Input label="SectionHeading" id="SectionHeading" text="Section Heading" type="text" name="sectionHeading" value={awardsData.sectionHeading} onChange={handleChange} placeholder="Awards" />
            <Input label="AwardName" id="AwardName" text="Award Name" type="text" name="awardName" value={awardsData.awardName} onChange={handleChange} placeholder="Professional Developer" />
            <Input label="AwardDate" id="AwardDate" text="Award Date" type="text" name="awardDate" value={awardsData.awardDate} onChange={handleChange} placeholder="Feb 2020" />
            <Input label="Awarder" id="Awarder" text="Awarder" type="text" name="awarder" value={awardsData.awarder} onChange={handleChange} placeholder="DevTeam" />
            <Input label="Summary" id="Summary" text="Summary" type="text" name="summary" value={awardsData.summary} onChange={handleChange} placeholder="Created Best Application for that case." />
            <div className="addremove">
                <Button type="button" class="btn btn-outline-primary btn-md btn-school" text="Add Skill" />
                <Button type="button" class="btn btn-outline-primary btn-md btn-school" text="Remove Skill" />
            </div>
        </Fragment>
    )
}