import React, { Fragment, useEffect, useState } from "react";
import Button from "../UI/Button";
import Input from "../UI/Input";
import ShortInput from "../UI/ShortInput";
import { WorkAction } from "../../actions";
import { useDispatch } from "react-redux";


export default function WorkForm(){
    const dispatch=useDispatch();
    const [workData,setWorkData]=useState([{
        companyName:"",
        jobTitle:"",
        jobLocation:"",
        startDate:"",
        endDate:"",
        jobResponsibility1:"",
        jobResponsibility2:"",
        jobResponsibility3:"",
        jobResponsibility4:"",
        jobResponsibility5:"",
    }]);
    function handleChange(event,index){
        const {name,value}=event.target;
        const workDataList=[...workData];
        workDataList[index][name]=value;
        setWorkData(workDataList)
    }
    function handleAddInput(){
        setWorkData([...workData,{companyName:"",
        jobTitle:"",
        jobLocation:"",
        startDate:"",
        endDate:"",
        jobResponsibility1:"",
        jobResponsibility2:"",
        jobResponsibility3:"",
        jobResponsibility4:"",
        jobResponsibility5:""}]);
    }
    function handleRemoveInput(index){
        const workDataList=[...workData];
        workDataList.splice(index,1);
        setWorkData(workDataList);
    }
    
    useEffect(()=>{
        dispatch(WorkAction(workData))
    },[workData,dispatch])

    
    return (
        <Fragment>
            {workData.map((data,index)=>{
                return (
                    <div key={index}>
                        <Input label="CompanyName" id="CompanyName" text="Company Name" type="text" name="companyName" placeholder="MICROSOFT" value={data.companyName} onChange={event=>handleChange(event,index)} />
                        <Input label="JobTitle" id="JobTitle" text="JobTitle" type="text" name="jobTitle" placeholder="Software Engineer" value={data.jobTitle} onChange={event=>handleChange(event,index)} />
                        <Input label="JobLocation" id="JobLocation" text="Job Location" type="text" name="jobLocation" placeholder="Stanford, CA" value={data.jobLocation} onChange={event=>handleChange(event,index)} />
                        <Input label="StartDate" id="StartDate" text="Start Date" type="text" name="startDate" placeholder="Sep 2018" value={data.startDate} onChange={event=>handleChange(event,index)} />
                        <Input label="EndDate" id="End Date" text="EndDate" type="text" name="endDate" placeholder="Jun 2022" value={data.endDate} onChange={event=>handleChange(event,index)} />
                        <ShortInput label="JobResponsibilty1" id="JobResponsibilty1" text="Job Responsibilty" type="text" name="jobResponsibility1" placeholder="Did cool stuff at company" value={data.jobResponsibility1} onChange={event=>handleChange(event,index)} />
                        <ShortInput label="JobResponsibilty2" id="JobResponsibilty2" text="Job Responsibilty" type="text" name="jobResponsibility2" placeholder="Did cool stuff at company" value={data.jobResponsibility2} onChange={event=>handleChange(event,index)} />
                        <ShortInput label="JobResponsibilty3" id="JobResponsibilty3" text="Job Responsibilty" type="text" name="jobResponsibility3" placeholder="Did cool stuff at company" value={data.jobResponsibility3} onChange={event=>handleChange(event,index)} />
                        <ShortInput label="JobResponsibilty4" id="JobResponsibilty4" text="Job Responsibilty" type="text" name="jobResponsibility4" placeholder="Did cool stuff at company" value={data.jobResponsibility4} onChange={event=>handleChange(event,index)} />
                        <ShortInput label="JobResponsibilty5" id="JobResponsibilty5" text="Job Responsibilty" type="text" name="jobResponsibility5" placeholder="Did cool stuff at company" value={data.jobResponsibility5} onChange={event=>handleChange(event,index)} />
                        <div className="addremove">
                            {workData.length -1 === index &&  <Button type="button" class="btn btn-outline-primary btn-md btn-school" text="Add Work" onClick={handleAddInput} />}
                            {workData.length !==1 && <Button type="button" class="btn btn-outline-primary btn-md btn-school" text="Remove Work"  onClick={()=>handleRemoveInput(index)} />}
                        </div>
                    </div>
                )
            })}
        </Fragment>
    )
}