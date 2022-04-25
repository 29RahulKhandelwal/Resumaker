import React, { Fragment, useEffect, useState } from "react";
import Button from "../UI/Button";
import Input from "../UI/Input";
import ShortInput from "../UI/ShortInput";
import { ProjectAction } from "../../actions";
import { useDispatch } from "react-redux";

const getProjectDataFromLocalStorage=()=>{
    let data=localStorage.getItem("project_data");
    if(data){
        return JSON.parse(data)
    }else{
        return[{
            projectName:"",
            projectDescription:"",
            projectLink:"",
            projectLanguage1:"",
            projectLanguage2:"",
            projectLanguage3:"",
            projectLanguage4:"",
            projectLanguage5:"",
            projectLanguage6:"",
            projectLanguage7:"",
            projectLanguage8:"",
        }]
    }
}

export default function ProjectForm(){
    const dispatch=useDispatch();
    const [projectData,setProjectData]=useState(getProjectDataFromLocalStorage);
    function handleChange(event,index){
        const {name,value}=event.target;
        const projectDataList=[...projectData];
        projectDataList[index][name]=value;
        setProjectData(projectDataList)
    }
    function handleAddInput(){
        setProjectData([...projectData,{projectName:"",
        projectDescription:"",
        projectLink:"",
        projectLanguage1:"",
        projectLanguage2:"",
        projectLanguage3:"",
        projectLanguage4:"",
        projectLanguage5:"",
        projectLanguage6:"",
        projectLanguage7:"",
        projectLanguage8:""}])
    }
    function handleDeleteInput(index){
        const projectDataList=[...projectData];
        projectDataList.splice(index,1);
        setProjectData(projectDataList)
    }

    useEffect(()=>{
        dispatch(ProjectAction(projectData))
        localStorage.setItem("project_data",JSON.stringify(projectData))
    },[projectData,dispatch])


    return (
        <Fragment>
            {projectData.map((data,index)=>{
                return(
                    <div key={index}>
                        <Input label="ProjectName" id="ProjectName" text="Project Name" type="text" name="projectName" placeholder="Resumaker" value={data.projectName} onChange={event=>handleChange(event,index)} />
                        <Input label="ProjectDescription" id="ProjectDescription" text="Project Description" type="text" name="projectDescription" placeholder="Resumaker is a online application for creating resume just by entering your details." value={data.projectDescription} onChange={event=>handleChange(event,index)} />
                        <Input label="LinkToProject" id="LinkToProject" text="Link To Project" type="url" name="projectLink" placeholder="http://resumaker.com" value={data.projectLink} onChange={event=>handleChange(event,index)} />
                        <ShortInput label="projectLanguage1" id="projectLanguage1" text="Languages Used" type="text" name="projectLanguage1" placeholder="Javascript" value={data.projectLanguage1} onChange={event=>handleChange(event,index)} />
                        <ShortInput label="projectLanguage2" id="projectLanguage2" text="Languages Used" type="text" name="projectLanguage2" placeholder="Javascript" value={data.projectLanguage2} onChange={event=>handleChange(event,index)} />
                        <ShortInput label="projectLanguage3" id="projectLanguage3" text="Languages Used" type="text" name="projectLanguage3" placeholder="Javascript" value={data.projectLanguage3} onChange={event=>handleChange(event,index)} />
                        <ShortInput label="projectLanguage4" id="projectLanguage4" text="Languages Used" type="text" name="projectLanguage4" placeholder="Javascript" value={data.projectLanguage4} onChange={event=>handleChange(event,index)} />
                        <ShortInput label="projectLanguage5" id="projectLanguage5" text="Languages Used" type="text" name="projectLanguage5" placeholder="Javascript" value={data.projectLanguage5} onChange={event=>handleChange(event,index)} />
                        <ShortInput label="projectLanguage6" id="projectLanguage6" text="Languages Used" type="text" name="projectLanguage6" placeholder="Javascript" value={data.projectLanguage6} onChange={event=>handleChange(event,index)} />
                        <ShortInput label="projectLanguage7" id="projectLanguage7" text="Languages Used" type="text" name="projectLanguage7" placeholder="Javascript" value={data.projectLanguage7} onChange={event=>handleChange(event,index)} />
                        <ShortInput label="projectLanguage8" id="projectLanguage8" text="Languages Used" type="text" name="projectLanguage8" placeholder="Javascript" value={data.projectLanguage8} onChange={event=>handleChange(event,index)} />
                        <div className="addremove">
                            {projectData.length -1 === index && <Button type="button" class="btn btn-outline-primary btn-md btn-school" text="Add Project"  onClick={handleAddInput} />}
                            {projectData.length !==1 && <Button type="button" class="btn btn-outline-primary btn-md btn-school" text="Remove Project"  onClick={()=>handleDeleteInput(index)} />}
                        </div>
                    </div>
                )
            })}
        </Fragment>
    )
}