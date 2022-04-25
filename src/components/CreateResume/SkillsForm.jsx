import React, { Fragment, useEffect, useState } from "react";
import CircleButton from "../UI/CircleButton";
import ShortInput from "../UI/ShortInput";
import { SkillAction } from "../../actions";
import { useDispatch } from "react-redux";


export default function SkillsForm(){
    const dispatch=useDispatch();
    const [skillNameData,setSkillNameData]=useState([{
        skillName:""
    }]);
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

    useEffect(()=>{
        dispatch(SkillAction(skillNameData))
    },[skillNameData,dispatch])

    console.log(skillNameData);

    return (
        <Fragment>
            {skillNameData.map((skill,index)=>(
                <div key={index}>
                    <ShortInput label="SkillName" id="SkillName" text="Skill Name" type="text" name="skillName" value={skill.skillName}  onChange={(e)=>handleChange(e,index)} placeholder="Javascript" />
                    <div className="circle">
                        {skillNameData.length -1 === index && skillNameData.length < 10 && <CircleButton type="button" class="btn btn-outline-primary btn-md btn-circle" text="+" onClick={handleSkillAdd}  />}
                        {skillNameData.length > 1 && <CircleButton type="button" class="btn btn-outline-primary btn-md btn-circle" text="-" onClick={handleSkillDelete} />}
                    </div>
                </div>
            ))}
        </Fragment>
    )   
}