import React, { Fragment, useEffect, useState } from "react";
import CircleButton from "../UI/CircleButton";
import ShortInput from "../UI/ShortInput";
import Button from "../UI/Button";
import { SkillAction } from "../../actions";
import { useDispatch } from "react-redux";

const getSkillsDataFromLocalStorage=()=>{
    let data=localStorage.getItem("skills_data");
    if(data){
        return JSON.parse(data)
    }else{
        return[{
            skillName:""
        }]
    }
}

export default function SkillsForm(){
    const dispatch=useDispatch();
    const [skillNameData,setSkillNameData]=useState(getSkillsDataFromLocalStorage);
    function handleChange(event,index){
        const {name,value}=event.target;
        const SkillList=[...skillNameData];
        SkillList[index][name]=value;
        setSkillNameData(SkillList);
    }
    function handleSkillAdd(){
        setSkillNameData([...skillNameData,{skillName:""}]);
    }
    function handleSkillDelete(index){
        const SkillList=[...skillNameData];
        SkillList.splice(index,1);
        setSkillNameData(SkillList);
    }

    function handleClear(){
        setSkillNameData([{
            skillName:""
        }])
    }

    useEffect(()=>{
        dispatch(SkillAction(skillNameData))
        localStorage.setItem("skills_data",JSON.stringify(skillNameData))
    },[skillNameData,dispatch])


    return (
        <Fragment>
            {skillNameData.map((skill,index)=>(
                <div key={index}>
                    <ShortInput label="SkillName" id="SkillName" text="Skill Name" type="text" name="skillName" value={skill.skillName}  onChange={(e)=>handleChange(e,index)} placeholder="Javascript" />
                    <div className="center circle">
                        {skillNameData.length -1 === index && skillNameData.length < 10 && <CircleButton type="button" class="btn btn-outline-primary btn-md btn-circle" text="+" onClick={handleSkillAdd}  />}
                        {skillNameData.length > 1 && <CircleButton type="button" class="btn btn-outline-primary btn-md btn-circle" text="-" onClick={handleSkillDelete} />}
                    </div>
                    <Button type="button" class="btn btn-outline-primary btn-md btn-school" text="Clear Text" onClick={handleClear} />
                </div>
            ))}
        </Fragment>
    )   
}