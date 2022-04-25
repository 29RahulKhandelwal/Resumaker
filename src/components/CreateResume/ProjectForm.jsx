import React, { Fragment, useEffect, useState } from "react";
import Button from "../UI/Button";
import CircleButton from "../UI/CircleButton";
import Input from "../UI/Input";
import ShortInput from "../UI/ShortInput";
import { ProjectAction } from "../../actions";
import { useDispatch } from "react-redux";

export default function ProjectForm(){
    const dispatch=useDispatch();
    const [data,setData]=useState({});
    const [projectData,setProjectData]=useState([{
        projectName:"",
        projectDescription:"",
        projectLink:""
    }]);
    const [skillsData,setSkillsData]=useState("");
    const [skills,setSkills]=useState([]);
    function handleChange(event){
        const {name,value}=event.target;
        setProjectData({...projectData,[name]:value});
    }
    function handleAddInput(){
        setData(data.length > 0 ? [...data,{...projectData,skills:skills}] : [{...projectData,skills:skills}])
        setProjectData({
            projectName:"",
            projectDescription:"",
            projectLink:""});
        setSkills([]);
    }
    // function handleDeleteInput(index){
    //     const temp=[...data];
    //     temp.splice(index,1);
    //     setData(temp);
    // }
    function handleSkillChange(e,index){
        const {value}=e.target;
        setSkillsData(value);
    }
    function handleSkillAdd(){
        if(skillsData){
            setSkills(skills.length > 0 ? [...skills,skillsData] : [skillsData])
            setSkillsData("")
        } 
    }

    useEffect(()=>{
        dispatch(ProjectAction(data))
    },[data,dispatch])

    console.log(data);

    return (
        <Fragment>
            return (
                <Input label="ProjectName" id="ProjectName" text="Project Name" type="text" name="projectName" placeholder="Resumaker" value={projectData.projectName} onChange={event=>handleChange(event)} />
                <Input label="ProjectDescription" id="ProjectDescription" text="Project Description" type="text" name="projectDescription" placeholder="Resumaker is a online application for creating resume just by entering your details." value={projectData.projectDescription} onChange={event=>handleChange(event)} />
                <Input label="LinkToProject" id="LinkToProject" text="Link To Project" type="url" name="projectLink" placeholder="http://resumaker.com" value={projectData.projectLink} onChange={event=>handleChange(event)} />
                <ShortInput label="LanguagesUsed" id="LanguagesUsed" text="Languages Used" type="text" name="projectLanguages" placeholder="Javascript" value={skillsData} onChange={event=>handleSkillChange(event)} />
                <div className="circle">
                    <CircleButton type="button" class="btn btn-outline-primary btn-md btn-circle" text="+"  onClick={handleSkillAdd} />
                </div>
                <div className="addremove">
                    <Button type="button" class="btn btn-outline-primary btn-md btn-school" text="Add Skill"  onClick={handleAddInput} />
                </div>
        </Fragment>
    )
}